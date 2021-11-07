import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

check(u,c){
      return this.http.post('http://localhost:3001/login',{u,c});
    }
}
