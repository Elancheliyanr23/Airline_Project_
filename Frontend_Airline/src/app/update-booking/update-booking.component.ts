import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  submitted: boolean = false;
  bookingId: number = 0;
  booking: Booking = {
    bookingId: 0, noOfPassengers: 0,
    passengerName: '',
    passengerAge: 0,
    passengerGender: '',
    passengerEmail: '',
    rate: 0,
    bookingStatus: '',
    paymentStatus: '',
    passengerPhone: 0
  };
  minDate: any = new Date();

  constructor(private route: ActivatedRoute, private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    const d = new Date();
    this.minDate = d.getFullYear() +'-'+ (d.getMonth() + 1)+'-'+ d.getDate();

    this.booking = new Booking();

    this.bookingId = this.route.snapshot.params['id'];

    this.bookingService.getBooking(this.bookingId)
    .subscribe(data => {
      console.log(data);
      this.booking = data;
      },
      error => console.log(error));
  }

  updateBooking() {
    this.bookingService.updateBooking(this.booking)
      .subscribe(data => this.gotoList(), error => console.log(error));
    this.booking = new Booking();
   
  }

  onSubmit() {
    this.updateBooking();
  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }
}
