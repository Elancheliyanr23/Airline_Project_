import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight.component';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
// flight : Flight = new Flight(0,'','',0,false);
flight : Flight = new Flight();
errorMessage: string='';
submitted=false;
  constructor(private flightService: FlightService,
    private router: Router) { }

  ngOnInit(){
  }
  newFlight(): void{
    this.submitted=false;
    this.flight=new Flight();
  }
  save() {
    this.flightService.addFlight(this.flight)
      .subscribe(data => this.gotoList(), error => console.log(error));
    this.flight= new Flight();
  }
      
  onSubmit() {
    if (this.flight.flightNo === 0 || this.flight.flightName === ''||this.flight.flightName === ''|| this.flight.flightModel === ''|| this.flight.rate === 0|| this.flight.seatCapacity === 0) {
      this.errorMessage = 'Please fill all the field';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    
    this.submitted=false;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/flights']);
  }
}

