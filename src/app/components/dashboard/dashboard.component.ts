import { Component } from '@angular/core';
import { ApiService } from '../../service/ApiService';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isLoading = false;
  error: string | null = null;
  totalAccountNumbers = 0;
  totalUniqueCustomers = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getRequest("/api/total-count").subscribe({
      next: (response: any) => {
        this.totalAccountNumbers = response.totalAccountNumbers;
        this.totalUniqueCustomers= response.totalUniqueCustomers;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      }
    });
  }

}
