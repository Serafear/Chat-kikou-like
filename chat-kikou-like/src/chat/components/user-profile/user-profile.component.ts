import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  userProfile: any;

  constructor(private authService: AuthService) {
    this.authService.getUserProfile().subscribe(
      (profile) => {
        this.userProfile = profile;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  ngOnInit() {}

  onSubmit() {
    // On peut créer la fonction update ici
    console.log('Profile updated:', this.userProfile);
  }
}
