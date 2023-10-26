import { Schedule } from './schedule';
import { Flight } from './flight.component';

export class ScheduledFlight {
    scheduleFlightId: number =0;
    flight: Flight = {action: false,flightNo: 0, flightName: '',flightLogo:'', flightModel: '',rate:0,  seatCapacity: 0};
    availableSeats: number = 0;
    schedule: Schedule = {scheduleId: 0, srcAirport: { action: false, airportCode: '', airportLocation: '', airportName: ''}, dstnAirport: { action: false, airportCode: '', airportLocation: '', airportName: ''}, deptDateTime: '' , arrDateTime: ''};
}
