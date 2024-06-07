import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  public doRegistration(userData: User){
    return this.http.post("http://localhost:8080/register", userData, {responseType:'text' as 'json'});
  }
  
  public doLogin(emailArg: String, passwordArg: String){
    return this.http.get<any>("http://localhost:8080/findUser/"+emailArg+"/"+passwordArg);
  }

  public getTopics(searchText:String){
    return this.http.get<any>("http://localhost:8080/searchByTextLike/"+searchText);
  }

  public getMyTopics(userId:number){
    return this.http.get<any>("http://localhost:8080/"+userId);
  }

  
}
