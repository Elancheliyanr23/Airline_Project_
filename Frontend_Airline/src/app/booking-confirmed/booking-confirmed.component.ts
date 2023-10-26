import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { ScheduledFlightService } from '../services/scheduled-flight.service';

@Component({
  selector: 'app-booking-confirmed',
  templateUrl: './booking-confirmed.component.html',
  styleUrls: ['./booking-confirmed.component.css']
})
export class BookingConfirmedComponent implements OnInit {


scheduleFlight: any ;
scheduleFlightId:number = 0;
show:boolean=false;
bookings: Booking[] = [];

constructor(private service: ScheduledFlightService, private router: Router,private bookingService: BookingService,) { }



  ngOnInit(): void {
  }

}
