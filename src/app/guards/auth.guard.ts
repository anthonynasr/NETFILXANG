import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkEnabled();
  }

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkEnabled();
  }

  private checkEnabled() {
    const isAuth = this.storageService.getData('token');
    if (isAuth) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
