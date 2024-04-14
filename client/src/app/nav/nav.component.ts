import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/acount.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
  }
 
  login() {
    this.accountService.login(this.model).subscribe({
      next: _ =>{
        return this.router.navigateByUrl('/members');
      }
    })
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');

  }
}
