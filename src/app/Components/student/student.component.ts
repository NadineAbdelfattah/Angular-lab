import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit ,OnChanges {

  constructor() { }
  ngOnChanges(changes:any): void {
    console.log(changes);
    // if(!changes.OneStudents.firstChange){
    //   this.students.push(this.OneStudents);
    // }
   
    if(changes.OneStudents.currentValue){
        this.students.push(this.OneStudents);
    }
    // this.students.push(this.OneStudents);
  }

  ngOnInit(): void {
  }
  // @Input('sss') listOfStudents:any;
  @Input('OS') OneStudents:any;
  students:{name:string,age:number}[]=[]
}
