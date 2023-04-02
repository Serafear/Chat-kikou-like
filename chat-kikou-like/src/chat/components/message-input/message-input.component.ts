import { Component } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css'],
})
export class MessageInputComponent {
  message: string = '';

  constructor() {}
  // private apiService: ApiService // Injectez votre service d'API ici

  sendMessage(): void {
    if (!this.message.trim()) {
      return; // Ne pas envoyer de message vide
    }

    // Appeler l'API pour envoyer le message
    // this.apiService.sendMessage(this.message).subscribe(response => {
    //   console.log('Message envoyé avec succès', response);
    // });

    console.log('Message:', this.message);
    this.message = ''; // Effacez le champ de saisie
  }
}
