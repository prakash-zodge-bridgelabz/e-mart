import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class DbService {
  
  constructor(private http:HttpClient) { }
  //find by username in db
  public getUsername(username:string):Observable<any>{
    return this.http.get("http://localhost:9090/findUser/"+username);
  }
  public getUsers(){
    return this.http.get("http://localhost:9090/getAllUsers");
  }
  
}
