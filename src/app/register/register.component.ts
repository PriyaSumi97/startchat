import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usermessage:any;
  username:any;
  userpassword: any;
  getvalue(name:any,password:any){
    //console.log(name, password)
    this.username= name.value;
    this.userpassword= password.value; 
    name.value="";
    password.value="";
    let reg_user= { username: this.username, password: this.userpassword}
    this.http.post("https://ddp.in.net/register", reg_user).subscribe((result:any)=>{
      if(result.message=="true"){
           this.router.navigate(['/users'])
           //console.log(result.result.username)
      }
      else{
           this.usermessage= result.message;
           document.getElementById("reg_user")?.append(this.usermessage);
    }
 })
}

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

}
