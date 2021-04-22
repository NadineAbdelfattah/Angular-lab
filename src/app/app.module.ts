import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllInOneComponent } from './Components/Day3/all-in-one/all-in-one.component';
import { HomeComponent } from './Components/ComponentInteraction/home/home.component';
import { LoginComponent } from './Components/ComponentInteraction/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { StudentComponent } from './Components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    AllInOneComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    StudentComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
