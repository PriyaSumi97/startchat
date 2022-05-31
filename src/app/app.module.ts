import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component'; 
//import { SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
//import { config } from 'process';
const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'users', component:UsersComponent},
  {path: 'users/chat/:id', component:ChatComponent},
  {path: 'register', component:RegisterComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    ChatComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    //SocketIoModule.forRoot(config),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
