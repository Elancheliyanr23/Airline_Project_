import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookingId: number = 0;
  booking: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.booking = new Booking();
    console.log('>>>>', this.route.snapshot)
    this.bookingId = this.route.snapshot.params['id'];

    this.bookingService.getBooking(this.bookingId)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error));
  }

  list(){
    this.router.navigate(['bookings']);
  }
}
