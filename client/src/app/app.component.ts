import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { AccountService } from './_services/acount.service';
import { User } from './_models/user';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] // Corrected styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private accountService: AccountService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setCurrentUser();
    }
  }
 
  setCurrentUser(){
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user: User = JSON.parse(userString);
    this.accountService.setCurrentUser(user);
  }
}