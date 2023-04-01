// LoginComponent.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, this.emailValidator]),
    password: new FormControl('', [
      Validators.required,
      this.passwordValidator,
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  emailValidator(control: FormControl): { [key: string]: boolean } | null {
    const email = control.value;
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValid = emailPattern.test(email);
    return isValid ? null : { invalidEmail: true };
  }

  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const password = control.value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    const isValid = passwordPattern.test(password);
    return isValid ? null : { invalidPassword: true };
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).subscribe(
      (response) => {
        // Log the response to see if it contains a token
        console.log('Login response:', response);
        console.log('Received email and password:', email, password);

        // Check the local storage for the token
        console.log('Token in local storage:', localStorage.getItem('token'));

        // Redirect the user to the main-chat route
        this.router.navigate(['/main-chat']);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
