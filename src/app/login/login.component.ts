import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service'
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms'; 
import {Router} from '@angular/router'
import io from 'socket.io-client';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user_profile= false;
  socket:any;
  usermessage:any;
  profile: any;
  loginValue: any;
  loginuser:any;
  private url = 'http://3.112.59.138';
  getvalue(name:any,password:any){
    this.loginuser=name;
    this.user.loginuser(this.loginuser);
    //console.log(name, password)
    let loginuser= { username: name, password: password}
    this.http.post("http://3.112.59.138/loginuser", loginuser).subscribe((result:any)=>{
      if(result.message!="fail"){
           localStorage.setItem('users', result.result.username)
           this.router.navigate(['/users', {username:result.result.username }])
           //console.log(result.result.username)
           this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
           //this.socket.emit("user_connected", {username:name, password:password});
      }
      else{
           this.usermessage= "Oops! Login Failed";
           document.getElementById("loginuser")?.append(this.usermessage);
    }
 })

  }
  
  
  constructor(private http: HttpClient, private router: Router, private user: UserServiceService){ }
  ngOnInit(): void {
    
    
  }
 
  //  onSubmit(data:any){
  //    let loginuser= { username:'priya', password: '123'}
  //      this.http.post("http://3.112.59.138/loginuser", data).subscribe((result:any)=>{
  //       localStorage.setItem('users', result.result.username)
  //       console.log(result.result.username)
  //   })

  }


