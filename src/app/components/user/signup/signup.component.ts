import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { toast, NgxSonnerToaster } from 'ngx-sonner';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink,NgxSonnerToaster],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signupForm!: FormGroup;
  showPassword: boolean = false
  showConfirmPassword: boolean = false
  constructor() {
    // Initialize the form group with form controls and validators
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required]) 
    });
  }


  getToast(){
    toast.success('Event has been created')
    
  }

  
  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log("Form is invalid");
    }
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }

  toggleConfirmPasswordVisibility(){
    this.showConfirmPassword = !this.showConfirmPassword
  }


}
