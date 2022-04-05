import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InitialService } from './services/initial.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  res:any;
  @ViewChild('para')
  para!: ElementRef;
  constructor(private route:Router){
   
  }
  ngOnInit(){


  }
  logout(){
  localStorage.clear();
   this.route.navigate(['/login']);
  }
 
  title = 'OrderManagement';
}
