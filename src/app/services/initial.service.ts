import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitialService {

  constructor(private http:HttpClient) { 

  }
  apiUrl="http://localhost:4500/"
  getUsers(){
  return  this.http.get(this.apiUrl+"getUsers");
  }
  getData(){
    return  this.http.get(this.apiUrl+"getData");
    }

}
