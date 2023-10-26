import { Component, OnInit } from '@angular/core';
import { Airport } from '../model/airport.component';
import { AirportService } from '../services/airport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css']
})
export class CreateAirportComponent implements OnInit {
  airport: Airport=new Airport();
  errorMessage: string='';
  submitted=false;
  constructor(private airportService: AirportService,private router: Router) { }

  ngOnInit(){
  }
  newEmployee(): void {
    this.submitted = false;
    this.airport = new Airport();
  }

  save() {
    this.airportService.addAirport(this.airport)
      .subscribe(data => this.gotoList(), error => console.log(error));
    this.airport = new Airport();
    
  }

  onSubmit() {
    if (this.airport.airportCode === '' || this.airport.airportName === ''||this.airport.airportLocation === '') {
      this.errorMessage = 'Please fill all the field';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/airports']);
  }

}
