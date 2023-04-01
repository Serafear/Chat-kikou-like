import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    const email = this.forgotPasswordForm.get('email')?.value;

    this.authService.resetPassword(email).subscribe(
      () => {
        // Afficher un message indiquant que le lien de réinitialisation a été envoyé
        //pas de sendgrid, pas de backend pour vérifier les données utilisateurs et valider le renvoi d'un token.
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
