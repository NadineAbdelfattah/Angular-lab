import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { HomeComponent } from './Components/ComponentInteraction/home/home.component';
import { LoginComponent } from './Components/ComponentInteraction/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { StudentComponent } from './Components/student/student.component';
import { ValidatorsComponent } from './Components/Validators/validators/validators.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './Components/Routing/employees/employees.component';
import { EmployeeDetailsComponent } from './Components/Routing/employee-details/employee-details.component';
import { AboutComponent } from './Components/Routing/about/about.component';
import { ProfileComponent } from './Components/Routing/profile/profile.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { HttpClientModule } from '@angular/common/http'
import { DemoserviceService } from './Components/Day05/Services/demoservice.service';
import { UsersComponent } from './Components/Day05/components/users/users.component';
import { UserDetailsComponent } from './Components/Day05/components/user-details/user-details.component';

// day4
// const routes:Routes=[
//   {path:'',component:EmployeesComponent}, //localhost 
//   {path:'employees',component:EmployeesComponent},
//   {path:'employees/:id',component:EmployeeDetailsComponent},
//   {path:'profile',component:ProfileComponent},
//   {path:'about',component:AboutComponent},
//   {path:'**',component:ErrorComponent}
// ]

// day5:
const routes:Routes=[
  {path:'',component:UsersComponent},
  {path:'/users',component:UsersComponent},
  {path:'/users/:id',component:UserDetailsComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllInOneComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    StudentComponent,
    ValidatorsComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    AboutComponent,
    ProfileComponent,
    ErrorComponent,
    UsersComponent,
    UserDetailsComponent 
  ],
  imports: [
 import { ErrorComponent } from './Components/Day05/components/error/error.component';


  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    DemoserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
