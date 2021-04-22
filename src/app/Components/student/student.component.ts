import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('sss') listOfStudents:any;

}
