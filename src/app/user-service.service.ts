import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http:HttpClient
  ) { }
  user:any;
  receiver= 'kanaka';
  loginUser:any;
  loginuser(name:any){
    this.loginUser=name;
    console.log(this.loginUser,"login user at services page")
  }
  getloginUser(){
    return this.loginUser
  }
  apiCall()
  {
    return this.http.get(`http://ddp.in.net/userslist`);
  }
   getReceiver(sender:any){
     return this.http.get(`http://ddp.in.net/users/chat/id=${this.user}?sender=${sender}`, {responseType: 'json'});
   }
  get user_profile(){
    return localStorage.getItem('users');
  }
  getUser(data:any){
    this.user= data
    console.log(this.user, "receiver at services side")
  }
  sendUser(){
    return this.user
  }

 /* loginUser(username:any, password:any)
  {
    return this.http.post(`http://ddp.in.net/loginUser`, {username:username, password:password});
  }*/
  
}
