import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  user: any;
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

    // UserName Validations
    nameFlag: boolean= false;
    validateName() {
      var flag =  /^[a-zA-Z ]+$/.test(this.user.userName);
      if(!flag) {
        this.nameFlag=true;
      }
      else {
        this.nameFlag=false;
      }
    }
    
    passFlag: boolean= false;
    validatePassword() {
      var flag =  /^[a-zA-Z ]+$/.test(this.user.userPassword);
      if(!flag) {
        this.passFlag=true;
      }
      else {
        this.passFlag=false;
      }
    }
  
    
  // Check user for authenticatoin
  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe((userData) => {
    //  console.log("redirect");
    //  alert("Password is invalid");
        // userData => {
          sessionStorage.setItem('username', userData?.userName);
          this.user = userData;
          this.redirect();
    }, err => {
      this.invalidLogin = true;
    });
   if(this.loginservice.authenticate(this.username, this.password)) {
      this.loginservice.getRole(this.username).subscribe((data: User)=> {
        this.user = data;
        this.redirect();
      });
    }
    else {
      console.log("Invalid Login Credentials..");
      this.invalidLogin = true;
    }
  }

  // Redirect based on the user role
  redirect() {
    if(this.user.roles === 'ROLE_CUSTOMER') {
      sessionStorage.setItem('role', 'customer');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/userpanel"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.roles === 'ROLE_ADMIN') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/welcomeAdmin"]).then(()=> {
        window.location.reload();
      });
    }
  }

}
