// register.component.ts

import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private registerService: RegisterService) {}

  register() {
    if (this.isPasswordMatch()) {
      this.registerService.registerUser({
        name: this.name,
        email: this.email,
        password: this.password,
      });
    } else {
      alert('Password and Confirm Password do not match.');
    }
  }

  isPasswordMatch(): boolean {
    return this.password === this.confirmPassword;
  }
}
