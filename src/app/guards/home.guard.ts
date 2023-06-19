import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class HomeGuard implements CanActivate {
  constructor(private storageService: StorageService, private router: Router) {}
  canActivate(): boolean {
    return this.checkEnabled();
  }

  private checkEnabled() {
    const isAuth = this.storageService.getData('token');
    if (isAuth) {
      // User is logged in, allow access to the home page
      return true;
    } else {
      // User is not logged in, redirect to the sign-in page
      this.router.navigate(['signin']);
      return false;
    }
  }
}
