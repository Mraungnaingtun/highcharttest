import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL, Psw, User } from '../constant/config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getRequest(url:string): Observable<any> {
    return this.http.get(`${API_URL}${url}`, {
      headers: this.getAuthHeaders()
    }).pipe(
      catchError(this.handleError)
    );
  }

  postRequest(url: string, data: any): Observable<any> {
    const options = {
      headers: this.getAuthHeaders(),
    };
    return this.http.post(`${API_URL}${url}`, data, options).pipe(
        catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  private getAuthHeaders(): HttpHeaders {
    const username = User;
    const password = Psw;

    if (username && password) {
      const credentials = btoa(encodeURIComponent(username) + ':' + encodeURIComponent(password));
      const headers = new HttpHeaders({
        'Authorization': `Basic ${credentials}`
      });
      return headers;
    }
    return new HttpHeaders();
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
