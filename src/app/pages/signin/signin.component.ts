import { Component, OnInit } from '@angular/core';
import { FormField } from 'src/app/shared/models/modelParams.model';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  formLayoutConfig: FormField[] = [
    {
      name: 'email',
      fieldType: 'input',
      label: 'Email',
      datatype: 'email',
      required: true,
    },
    {
      name: 'password',
      fieldType: 'input',
      label: 'Password',
      datatype: 'password',
      required: true,
    },
  ];

  isLoggingIn = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  login(event) {
    this.isLoggingIn = true;
    this.authenticationService
      .signIn({
        email: event.email,
        password: event.password,
      })
      .subscribe({
        next: (event) => {
          this.storageService.saveData('token',event.user._delegate.accessToken)
          this.router.navigate(['home']);
        },
        error: (error) => {
          this.isLoggingIn = false;
        },
      });
  }
}
