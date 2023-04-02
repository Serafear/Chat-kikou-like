import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
})
export class ChatWindowComponent implements OnInit {
  chat?: {
    id: number;
    url: string;
    thumbnailUrl: string;
    caption: string;
    credit: string;
    messages: Array<{ user: string; text: string }>;
  };

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const chatId = +params['id'];
      this.chat = this.chatService.getChatById(chatId); // Affectez la valeur de this.chat
      console.log(this.chat); // Vous pouvez maintenant accéder à toutes les informations de la conversation
    });
  }
}
