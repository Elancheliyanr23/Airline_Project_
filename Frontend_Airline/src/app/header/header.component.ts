import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from './_service/app.authenticationservice';

//Author: Devang
//Description: Component for header
//Created On: 21/10/2019

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    buttonFlag:boolean = false;
    username:string = '';
    user:boolean = false;
    admin:boolean = false;

    constructor(
        private router: Router
    ){}

    ngOnInit(){
        this.user=false;
        this.admin=false;
        if(sessionStorage.getItem('role')==='customer'){
            this.user=true;
            this.buttonFlag = true;
        }else if(sessionStorage.getItem('role')==='admin'){
            this.admin=true;
            this.buttonFlag = true;
        }
        this.username=sessionStorage.getItem('username') || '';
        if(this.username!=null)
            this.username=this.username.toUpperCase();
    }

    gotHome(): void {
        if (this.user) {
            this.router.navigate(['/userpanel']);
        } else if (this.admin) {
            this.router.navigate(['/welcomeAdmin']);
        } else {
            this.router.navigate(['/home']);
        }
    }

    gotoLogin(): void {
        this.router.navigate(['/login']);
    }

    gotoLogout(): void {
        this.admin=false;
        this.user = false;
        this.router.navigate(['/logout']);
    }

}
