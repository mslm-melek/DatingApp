import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent implements OnInit {
  baseUrl = "https://localhost:7237/api/";
  validationErros : string[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }
  get404Error()
  {
    this.http.get(this.baseUrl+ 'buggy/not-found').subscribe({
      next: response=>console.log(response),
      error: error => {
        if (error.status === 404) {
          console.log('Resource not found'); // Handle 404 error
        } else {
          error.status
          console.log(error.status);
          console.error('An error occurred:', error); // Handle other errors
        }
      }
    })
  }
  get400Error()
  {
    this.http.get(this.baseUrl+ 'buggy/bad-request').subscribe({
      next: response=>console.log(response),
      error: error=>console.log(error)
    })
  }
  get500Error()
  {
    this.http.get(this.baseUrl+ 'buggy/server-error').subscribe({
      next: response=>console.log(response),
      error: error=>console.log(error)
    })
  }

  get401Error()
  {
    this.http.get(this.baseUrl+ 'buggy/auth').subscribe({
      next: response=>console.log(response),
      error: error=>console.log(error)
    })
  }
  get400ValidationError()
  {
    this.http.post(this.baseUrl+ 'account/register',{}).subscribe({
      next: response=>console.log(response),
      error: error=>{console.log(error);
        this.validationErros = error;
      }
     
    })
  }

}
