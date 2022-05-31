import { Component, OnInit } from '@angular/core';
//import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ANGULAR APP';
  //constructor (private api:UserServiceService){
  profile:any;
  user_profile:any;
  ngOnInit()
  {
    
    this.profile= localStorage.getItem("users")
    console.log(this.profile, 'aaaaaaaaaaaaaaa')
    if(this.profile != ''){
      this.user_profile= true;
    }  
 
  }
}

