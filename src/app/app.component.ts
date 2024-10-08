import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { filter, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule,NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Client';
  



//   signupForm!: FormGroup;
// showPassword: any;

  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.signupForm = this.formBuilder.group({
  //     name: ['', [Validators.required, Validators.minLength(2)]],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]],
  //     confirmPassword: ['', Validators.required],
  //     rememberMe: [false]
  //   }, { validator: this.passwordMatchValidator });
  // }

  // passwordMatchValidator(form: FormGroup) {
  //   const password = form.get('password');
  //   const confirmPassword = form.get('confirmPassword');
  //   return password && confirmPassword && password.value === confirmPassword.value
  //     ? null : { mismatch: true };
  // }

  // onSubmit() {
  //   if (this.signupForm.valid) {
  //     console.log(this.signupForm.value);
  //   } else {
  //     Object.keys(this.signupForm.controls).forEach(field => {
  //       const control = this.signupForm.get(field);
  //       control?.markAsTouched({ onlySelf: true });
  //     });
  //   }
  // }
}
