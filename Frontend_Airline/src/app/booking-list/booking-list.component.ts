import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { ScheduledFlight } from '../model/scheduled-flight';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

    scheduleFlight: any ;
    scheduleFlightId:number = 0;
    flight:any;
    show:boolean=false;
    bookings: Booking[] = [];

    constructor(private service: ScheduledFlightService, private router: Router,private bookingService: BookingService,) { }
  
    ngOnInit(): void {
      this.scheduleFlight=new ScheduledFlight();
      this.reloadData();
     
    }
  
    searchScheduleFlight(scheduleFlightId:number):any{
      this.show=true;
      console.log(scheduleFlightId);
      this.service.searchScheduledFlight(scheduleFlightId).subscribe((scheduleFlight: any)=>this.scheduleFlight=scheduleFlight);
  }
  
  idValid:boolean=false;
  validateId(){
      if(this.scheduleFlightId>999){
          this.idValid=true;
      }
      else if(this.scheduleFlightId<1){
          this.idValid=true;
      }else{
          this.idValid=false;
      }
  }
  reloadData() {
    // this.bookings = this.bookingService.getBookingsList();
    this.bookingService.getBookingsList().subscribe((res: any) => {
      this.bookings = res;
    });
  }

  deleteBooking(bookingId: number) {
    this.bookingService.deleteBooking(bookingId)
    .subscribe(
      data=> {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  bookingDetails(bookingId: number) {
    this.router.navigate(['bookingDetails', bookingId]);
  }

  updateBooking(bookingId: number) {
    this.router.navigate(['updateBooking', bookingId])
    .then(() => {
      window.location.reload();
    });
  }
  search(){
    this.router.navigate(['/scheduledFlight/search']);
  }
  bookNow(){
    this.router.navigate(['/booking-confirmed']);
  }
}
