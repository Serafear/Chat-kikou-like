import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
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
    if (this.registerForm.invalid) {
      return;
    }

    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    this.authService.register(email, password).subscribe(
      () => {
        // Redirect the user to the login page after successful registration
        this.router.navigate(['/login']);
        //no sendGrid for automatic email send and verification
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
