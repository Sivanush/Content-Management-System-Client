import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToasterService } from '../../../service/toaster/toaster.service';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;
  showPassword: boolean = false
  constructor(private toasterService: ToasterService, private formBuilder: FormBuilder,private userService:UserService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.toasterService.loadingToaster(this.userService.login(this.loginForm.value),'Login Successfully').then((res)=>{
        console.log(res) 
        localStorage.setItem('token',res.token)
        this.router.navigate(['']);
      }).catch((err)=>{
        console.log(err);
      })
    } else {
      this.loginForm.markAllAsTouched()
      console.log("Form is invalid");
      this.toasterService.showWarn('Please fill in all required fields correctly.');
    }
  }


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
