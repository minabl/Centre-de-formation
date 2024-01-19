import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  Uri="http://localhost:8080/";

  constructor(private http:HttpClient) { }
  registeruser(user: any): Observable<Object> {
    console.log(user);
    return this.http.post(this.Uri+'registuser',user)
  }
  
  userLogin(user: any): Observable<Object> {
    return this.http.post(this.Uri+'loginuser',user)
  }


 
}
