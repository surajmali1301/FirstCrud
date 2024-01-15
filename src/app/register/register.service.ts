import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(registrationData: any) {
    // Assuming email validation will be handled on the server-side
    return this.http.post('/api/register', registrationData).subscribe(
      () => {
        // Handle successful registration
      },
      (error) => {
        // Handle registration error, including potential email validation errors
        // You might want to extract specific error messages for user feedback
      }
    );
  }
}
