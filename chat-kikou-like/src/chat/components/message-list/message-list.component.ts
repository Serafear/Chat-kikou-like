import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent {
  //communication enfant-parent
  @Input() messages: Array<{ user: string; text: string }> = [];
}
