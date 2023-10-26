import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.component';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User={active: false, roles: '', userEmail: '', userId: 0, userName: '', userPassword: '', userPhone: 0, userType: ''};

  public barLabel: string = "Password strength:";
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];

  constructor(private router: Router, private loginservice: AuthenticationService) { }


  ngOnInit() {
    if(sessionStorage.getItem('role') === 'customer' || sessionStorage.getItem('role') === 'admin') {
      this.router.navigate(['noauth']);
    }
  }

  // Adds a new User
  signUp() {
    console.log(this.user);
    // this.user.userId=106;
    this.user.roles =  "ROLE_CUSTOMER";// "ROLE_CUSTOMER"

    //  this.user.roles =  "ROLE_ADMIN";//"ROLE_ADMIN"
    this.loginservice.signUp(this.user).subscribe((res: any) => {
      alert("User created successfully");
      this.router.navigate(["login"]);
    });
   
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

  // UserPhone valdiations
  phoneFlag:boolean=false;
    validatePhone(){
        let phone=String(this.user.userPhone);
        if(phone.length!=10){
            this.phoneFlag=true;
        }else{
            this.phoneFlag=false;
        }
    }

    //UserEmail Validation
    emailFlag:boolean=false;
    validateEmail(){
        var flag=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.userEmail);
        if(!flag){
            this.emailFlag=true;
        }else{
            this.emailFlag=false;
        }
    }

    buttonFlag:boolean=true;
    enableButton(){
        this.buttonFlag=this.nameFlag||this.emailFlag||this.phoneFlag;
    }
}
