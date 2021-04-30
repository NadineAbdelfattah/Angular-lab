import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  DataParent:string="Data from parent";
  DataFromLoginParent:any;
  // studet:any;
  // students:{ name: string; age: number; } []=[];
  student:any;
  ReceiveData(data:any){
    // console.log(data);
    // this.studet=data;
    // this.students.push(data);
    this.student=data;
  }
}
