import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.component';
import { BookingService } from '../services/booking.service';
import { Router } from '@angular/router';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { ScheduledFlight } from '../model/scheduled-flight';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  scheduleFlight: any ;
  scheduleFlightId:number = 0;
  show:boolean=false;
  booking: Booking = new Booking();
  submitted = false;
  constructor(
    private bookingService: BookingService,
    private router: Router,
    private service: ScheduledFlightService,
    ) { }
  minDate: any = new Date();
  ngOnInit(): void {
    const d = new Date();
    this.minDate = d.getFullYear() +'-'+ (d.getMonth() + 1)+'-'+ d.getDate();
    console.log('>>>>>>' , this.minDate)
    
  }
  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
    this.scheduleFlight=new ScheduledFlight();
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
  save() {
    this.bookingService.createBooking(this.booking)
    .subscribe(data => this.gotoList(),
    error => console.log(error));
    this.booking = new Booking(); 
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/bookings']);
  }
bookNow(){
  this.router.navigate(['/payments']);
}
search(){
  this.router.navigate(['/scheduledFlight/search']);
}
}
  

   
