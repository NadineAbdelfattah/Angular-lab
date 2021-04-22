import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-all-in-one',
  templateUrl: './all-in-one.component.html',
  styleUrls: ['./all-in-one.component.css']
})
export class AllInOneComponent  {

  constructor() { }
  name:string = '';
  age:number = 0;
  students:{name:string , age:number}[]=[]

add(){
  let student:{name:string,age:number} = {name:this.name,age:this.age};
  // console.log(student);
  this.students.push(student);
  this.name='';
  this.age=0;
}

}
