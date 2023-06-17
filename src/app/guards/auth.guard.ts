import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
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
      return true;
    }
    if (!this.router.url.includes('/signin')) {
      this.router.navigate(['/signin']);
    }
    return false;
  }
}
