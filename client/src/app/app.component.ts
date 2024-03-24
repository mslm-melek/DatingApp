import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  users: any;

  constructor(private http:HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('https://localhost:7237/api/users').subscribe({
      next: response => this.users = response,
      error : error => console.log(error),
      complete : () => console.log('completed')

    })
   }
}
