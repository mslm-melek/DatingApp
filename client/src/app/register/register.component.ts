import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AcountService } from '../_services/acount.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {}
  constructor(private acountService: AcountService, private toastr: ToastrService) { };
  ngOnInit(): void {

  }
  register() {
   this.acountService.register(this.model).subscribe({
    next: ()=>{
      this.cancel();
    },
    error: error=> this.toastr.error(error.error)
   })
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
