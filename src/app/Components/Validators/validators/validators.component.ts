import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styles: [
  ]
})
export class ValidatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ourValidators=new FormGroup({
    name : new FormControl("",Validators.required),
    age : new FormControl(null,[Validators.min(18),Validators.max(50),Validators.required])
  });
  Add(name:any,age:any){

  }
  get Name(){
    return this.ourValidators.controls.name.valid;
  }
  get Age(){
    return this.ourValidators.controls.age.valid;
  }
  sub(){
    // console.log(this.ourValidators);
    console.log("Name: "+this.ourValidators.controls.name.status);
    console.log("Age: "+this.ourValidators.controls.age.status);
  }

}
