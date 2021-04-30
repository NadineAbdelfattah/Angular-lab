import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {
  id:number;
  constructor(myActivated:ActivatedRoute) {
    // console.log(myActivated.snapshot.params.id);
    this.id=myActivated.snapshot.params.id;
   }
    
  ngOnInit(): void {
  }

}
