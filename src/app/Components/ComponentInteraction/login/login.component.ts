import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  //   setTimeout(()=>{
  //     this.myEvent.emit(this.DataLogin);
  //   },3000);
   }

  ngOnInit(): void {
    // this.myEvent.emit(this.DataLogin);
  }
  DataLogin:string='Data from login';
  @Output() myEvent=new EventEmitter();
  send(){
    this.myEvent.emit(this.DataLogin);
  }
}
