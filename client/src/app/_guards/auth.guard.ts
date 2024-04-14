import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/acount.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.accountService.currentUser$.pipe(
      map(user => {
        if (!user) {
          this.toastr.error('Not authorized');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}