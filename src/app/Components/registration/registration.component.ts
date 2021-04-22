import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string='';
  age:number=0;
  @Output() myEvent=new EventEmitter();
  Add(){
    let student={name:this.name,age:this.age};
    this.myEvent.emit(student); 
  }

}
