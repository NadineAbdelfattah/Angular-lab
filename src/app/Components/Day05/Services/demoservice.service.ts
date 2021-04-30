import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private myClient:HttpClient) { }
  BaseUrl='https://jsonplaceholder.typicode.com/users';

  getAllUsers(){
    return this.myClient.get(this.BaseUrl);
  }

  getUserById(id:number){
    return this.myClient.get(this.BaseUrl +'/'+ id);
  }

  addNewUser(user:any){
    return this.myClient.post(this.BaseUrl,user);
  }

  deleteUserById(id:number){
    return this.myClient.delete(this.BaseUrl +'/'+ id);
  }
}

