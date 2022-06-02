import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
const SOCKET_ENDPOINT= 'https://ddp.in.net';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  socket: any;
  message: any;
  dbmessage: any=[];
  appendMessage: any;
  private url = 'https://ddp.in.net/';
  //receiver:any=[];
  receiver: any;
  myreceiver:any;
  mysender:any;
  newsender:any;
  getValue(name:any){
    this.newsender=name;
    console.log(this.newsender)
 }
  sender= localStorage.getItem("users")

  constructor(private userapi:UserServiceService) {}
  ngOnInit(): void{
      
      this.userapi.getReceiver(this.sender).subscribe((data)=> {

        //console.log(data, "priyapriyapriya")
        this.receiver=data;
        this.myreceiver= this.receiver.receiver;
        this.mysender= this.receiver.sender;

        //console.log(this.myreceiver)
        this.dbmessage=this.receiver.message;
        //console.log(this.dbmessage, "message array success")
        this.socket.emit("user_connected", {username:this.mysender});
    })
        this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
        this.setUpSocketConnection();
    }
    
  setUpSocketConnection(){
      
      this.socket.on('message-broadcast', (data:any) => {
         console.log(data.message, "received message successfully")
         console.log(data.receiver, "received successfully")
         console.log(data)
             const element = document.createElement('li');
             element.innerHTML = data.message;
             element.style.background = 'white';
             element.style.padding =  '7px 10px';
             element.style.margin = '10px 10px 0px 10px';
             element.style.width = 'fit-content';
             element.style.borderRadius =  '10px';
            //this.appendMessage = data
            
             document.getElementById('message-list')?.append(element)
      
    
       })
   }
  
  SendMessage() {
    
    this.socket.emit('message',{sender:this.sender, receiver:this.myreceiver, message:this.message});
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'aqua';
    element.style.padding =  '7px 10px';
    element.style.textAlign = 'right';
    element.style.width = 'fit-content';
    element.style.borderRadius =  '10px';
    element.style.margin = '10px 10px 0px auto';
    //this.appendMessage= this.message;
    
    document.getElementById('message-list')?.append(element)
    this.message = '';
 }
}
