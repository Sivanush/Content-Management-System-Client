import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  signupForm!: FormGroup;
  showPassword: any;
  constructor() {
    // Initialize the form group with form controls and validators
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }


  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log("Form is invalid");
    }
  }


  togglePasswordVisibility() {
    throw new Error('Method not implemented.');
  }
}
