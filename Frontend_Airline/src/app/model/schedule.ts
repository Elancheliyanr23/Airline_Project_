import { Airport } from './airport.component';

export class Schedule {
    scheduleId: number  = 0;
    srcAirport: Airport = { action: false, airportName: '', airportLocation: '' , airportCode: '' };
    dstnAirport: Airport = { action: false, airportName: '', airportLocation: '' , airportCode: '' };
    deptDateTime: string = '';
    arrDateTime: string = '';
}
