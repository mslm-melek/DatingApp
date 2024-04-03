import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Injectable, inject } from '@angular/core';
import { AcountService } from '../_services/acount.service';


export const AuthGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AcountService);
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) {
        return true;
      } else {
        toastr.error('Not authorized');
        return false;
      }
    })
  );
};