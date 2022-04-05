import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { login } from 'src/app/model/login';
import { InitialService } from './../../services/initial.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  log:login={
    email: "",
    password: ""
  }
  users:any;
  constructor(private serv:InitialService, private route:Router) {
    if(localStorage.getItem("user")){
      this.login=false;
      this.route.navigate(['orders']);

    }
        this.serv.getUsers().subscribe(
          (s:any)=>{
            console.log("Users",s)
            this.users=s["users"];
            console.log("getting users array",this.users)
            this.sortData();
          }
        )
        

   }
   data:any;
   mails:any=[]
   sortData(){
     for(var i=0; i < this.users.length;i++){
       console.log( this.users[i].user );
       console.log( this.users[i].pass );
       this.mails.push(this.users[i].user.toString());
     }
   }
  
  login:boolean=true;
  message=""
  rem=false;
  remember_me(){
    this.rem=!this.rem;
    console.log("remember me",this.rem)
  }
  onSubmit(){
   
    if (this.log.password != '' && this.log.email != "") {
      if (this.log.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      if(this.mails.indexOf(this.log.email)!=-1){
        if(this.log.password === this.users[this.mails.indexOf(this.log.email)].pass){
               this.message="Logged In!"
               if(this.rem){
                 localStorage.setItem("user",this.log.email.toString());
                 
               }
               this.route.navigate(['orders']);
              //  this.route.navigate
        }
      }
  
      }
    }
  }
  ngOnInit(): void {
  }

}
