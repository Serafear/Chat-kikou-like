import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css'],
})
export class MessageInputComponent {
  @Output() messageSent = new EventEmitter<{ user: string; text: string }>();
  messageText = '';

  constructor(private authService: AuthService) {}

  sendMessage(): void {
    if (!this.messageText.trim()) {
      return; // Ne pas envoyer de message vide
    } else {
      console.log('Message:', this.messageText);

      this.authService.getUserProfile().subscribe(
        (userProfile) => {
          const userId = userProfile.name; // Utilisez le champ souhaité pour l'ID utilisateur
          this.messageSent.emit({ user: userId, text: this.messageText });
          this.messageText = '';
        },
        (error) => {
          console.error(
            'Erreur lors de la récupération du profil utilisateur:',
            error
          );
        }
      );
    }
  }
}
