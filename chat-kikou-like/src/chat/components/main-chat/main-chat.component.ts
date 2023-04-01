import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css'],
})
export class MainChatComponent implements OnInit {
  messageListVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  toggleMessageList(): void {
    this.messageListVisible = !this.messageListVisible;
  }

  // You may also want to add the method for handling notifications
  showNotifications(): void {
    console.log('Show notifications');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
