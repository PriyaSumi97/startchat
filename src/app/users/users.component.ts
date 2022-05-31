import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { UserServiceService } from '../user-service.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  array:any =[];
  loginuser:any;
  //getValue(data:any){
  //    console.log(data)
 // }
  getusers(data:any){
    this.users=data
    console.log(this.users, "receiver got it")
    this.api.getUser(this.users)
    //console.log(this.users, "sending users to service check")
  }
  constructor(private api:UserServiceService) { }
  ngOnInit(): void {
      this.api.apiCall().subscribe((data)=> {
      console.log(data)
      this.array= data; 
      this.loginuser=this.api.getloginUser();
      console.log(this.loginuser, "I got the login user")  
    })
      
  }

}
