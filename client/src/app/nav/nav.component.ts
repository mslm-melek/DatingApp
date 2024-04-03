import { Component, OnInit } from '@angular/core';
import { AcountService } from '../_services/acount.service';
import { error } from 'console';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public acountService: AcountService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
  }
 
  login() {
    this.acountService.login(this.model).subscribe({
      next: _ =>{
        return this.router.navigateByUrl('/members');
      },
      error: error => {
        return this.toastr.error(error.error);
      }
      
    })
  }
  logout(){
    this.acountService.logout();
    this.router.navigateByUrl('/');

  }
}
