import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  passwordsMatch = true; // Flag for password matching

  constructor(private registerService: RegisterService) {}

  checkPasswordMatch() {
    this.passwordsMatch =
      this.registerForm.password === this.registerForm.confirmPassword;
  }

  onSubmit() {
    if (this.passwordsMatch) {
      this.registerService.register(this.registerForm);
    }
  }
}
