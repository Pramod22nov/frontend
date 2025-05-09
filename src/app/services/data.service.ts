import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  setBookingData(arg0: { booking_id: any; user_id: number; seat_numbers: any; passengers: any; schedule_id: any; }) {
    throw new Error('Method not implemented.');
  }
  fromCity = new BehaviorSubject<string>('');
  toCity = new BehaviorSubject<string>('');
  date = new BehaviorSubject<Date | null>(null);
  constructor() {}
}
