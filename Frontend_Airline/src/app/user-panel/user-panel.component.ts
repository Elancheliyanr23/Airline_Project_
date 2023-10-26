import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  constructor(private router: Router,
    private authenti: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authenti.logOut();
    this.router.navigate(['/home']);
  }

  addBooking(): void {
    this.router.navigate(['/addBooking']);
  }

  listBooking(): void {
    this.router.navigate(['/bookings']);
  }
  viewScheduledFlight(): void{
    this.router.navigate(['/scheduledFlight/show'])
  }
 
}
