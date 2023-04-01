import { Component } from '@angular/core';

export interface Profile {
  id: number;
  imageUrl: string;
  name: string;
  showMenu: boolean;
}

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css'],
})
export class GroupDetailsComponent {
  profiles: Profile[] = [
    {
      id: 1,
      imageUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091346428204429373/Kolia_imagine_circular_profile_photo_b4fd4376-dd38-44d9-88d7-c240413f0585.png?width=325&height=325',
      name: 'Profile 1',
      showMenu: false,
    },
    {
      id: 2,
      imageUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091346487771922442/Kolia_imagine_circular_profile_photo_938664ae-d4db-4746-99ae-0cb34c689cbd.png?width=325&height=325',
      name: 'Profile 2',
      showMenu: false,
    },
    {
      id: 3,
      imageUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091346566469652580/Kolia_imagine_circular_profile_photo_421697ba-fb37-408b-b197-3ec26b05ebb3.png?width=325&height=325',
      name: 'Profile 3',
      showMenu: false,
    },
    {
      id: 4,
      imageUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091346623575109692/Kolia_circular_profile_photo_random_black_multiracial_asian_whi_24361c3a-1c1c-42c2-bf02-8035875ce36d.png?width=325&height=325',
      name: 'Profile 3',
      showMenu: false,
    },
    {
      id: 5,
      imageUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091346663685242910/Kolia_circular_profile_photo_black_man_9ee1db74-22ab-48e7-9655-b42b86bf7d15.png?width=325&height=325',
      name: 'Profile 3',
      showMenu: false,
    },
  ];

  onOptionClick(profile: Profile, option: string): void {
    profile.showMenu = false;

    switch (option) {
      case 'whisper':
        this.whisper(profile);
        break;
      case 'invite':
        this.invite(profile);
        break;
      case 'block':
        this.block(profile);
        break;
      default:
        console.error('Invalid option selected');
    }
  }

  whisper(profile: Profile): void {
    console.log(`Whisper to ${profile.name}`);
    // Add your whisper functionality here
  }

  invite(profile: Profile): void {
    console.log(`Invite ${profile.name}`);
    // Add your invite functionality here
  }

  block(profile: Profile): void {
    console.log(`Block ${profile.name}`);
    // Add your block functionality here
  }
}
