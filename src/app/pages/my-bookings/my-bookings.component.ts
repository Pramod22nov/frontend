import { DatePipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-my-bookings',
  imports: [NgFor, NgIf ,DatePipe],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  router = inject(Router);
  Data = inject(DataService);

  bookingId: number = 0;
  bookingData: any = null;
  error: string = '';
  bookingDetailsId: any;
  bookingDetails: any;

  ngOnInit(): void {
    const state = history.state;
    if (state?.bookingDetailsId) {
      this.bookingDetailsId = state.bookingDetailsId;
      this.getBookingDetailsById();
    } else {
      this.error = 'No Booking Detail ID provided';
    }
  }

  getBookingDetailsById() {
    this.http.get<any>(`http://localhost:5000/v1/api/details/details/${this.bookingDetailsId}`).subscribe({
      next: (res) => {
        if (res.status_code === '200' && res.data?.length) {
          this.bookingDetails = res.data[0];
        } else {
          this.error = res.message || 'No data found';
        }
      },
      error: () => {
        this.error = 'Failed to fetch booking details';
      }
    });
  }
  
}
