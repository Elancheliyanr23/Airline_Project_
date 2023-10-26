import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.component';
import { Observable } from 'rxjs';

//Author: SANCHIT SINGHAL
//Description: Performs Authentication and user management operations
//Created On: 08/05/2020


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  //Retrieves user token and checks authentication
  authenticate(username: any, password: any): Observable<any>{
    const body: any = {
      "userName": username,
      "userPassword": password
    };
    return this.httpClient.post<any>('http://localhost:8080/user/authenticate',
    body);
  }

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  // Removes user session(logout)
  logOut() {
    sessionStorage.removeItem('username');
  }

  // Retrives role of user(customer/admin)
  getRole(username:String): Observable<any> {
    return this.httpClient.get('http://localhost:8080/getRole?username='+ username);
  }

  // Adds a new User
  signUp(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8080/user/createUser', user);
  }


}
