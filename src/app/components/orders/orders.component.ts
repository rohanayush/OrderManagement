import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InitialService } from 'src/app/services/initial.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
res:any;
  constructor(private serv:InitialService) {
    this.serv.getData().subscribe(
      (a:any)=>{
        console.log("yes",a);
        this.res=a["data"];
        console.log("data",this.res)
      }
    )
   }
   delete(o: any){
     this.res = this.res.filter(
       (       fil: { order_no: any; }) => fil.order_no != o.order_no
     )
   }

  ngOnInit(): void {
  }
  editState=false;
  ed:any;
  edit(o:any){
   this.ed=o;
   console.log("ed",this.ed)
   this.editState=true;

  }
  onSubmit(){
    console.log("submitted")
    if(this.neww){
         this.res.push(this.ed);
    this.editState=false;
    this.neww=false;

    }
    else{
    var foundIndex = this.res.findIndex((x: { order_no: any; }) => x.order_no === this.ed.order_no);

    this.res[foundIndex] = this.ed;

    // this.res.map((obj: { order_no: any; }) => this.ed.find((o: { order_no: any; }) => o.order_no === obj.order_no) || obj);
    this.editState=false;
    }
  }
  cancel(){
    this.editState=false;

  }
  neww=false;
  new(){
    this.neww=true;
    this.ed={};
    this.ed.order_no=Number(this.res[this.res.length-1].order_no) +1;
    this.editState=true;
    
  }
}
