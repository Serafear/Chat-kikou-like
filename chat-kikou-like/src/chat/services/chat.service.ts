import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chats: Array<{
    id: number;
    url: string;
    thumbnailUrl: string;
    caption: string;
    credit: string;
    messages: Array<{ user: string; text: string }>;
  }> = [
    // Copiez le contenu du tableau "chats" ici
    {
      id: 1,
      url: 'https://media.discordapp.net/attachments/1030197119304355870/1091315932057583646/Kolia_paper_journal_c7b2b35e-77b9-45b8-a680-4480a8ecab1d.png?width=325&height=325',
      thumbnailUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091315932057583646/Kolia_paper_journal_c7b2b35e-77b9-45b8-a680-4480a8ecab1d.png?width=150&height=150',
      caption: 'written by Tim Marshall',
      credit: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      messages: [
        { user: 'Alice', text: 'Hello, what is this topic about ?' },
        { user: 'Bob', text: 'Digitalisation, i think ?' },
        {
          user: 'Alice',
          text: 'Yay ! finally we embrace modernity ! tired of those papers...',
        },
      ],
    },
    {
      id: 2,
      url: 'https://media.discordapp.net/attachments/1030197119304355870/1091315979113472040/Kolia_futuristic_heavy_construction_machine_1208da47-a4a0-436e-a79a-458214276f22.png?width=325&height=325',
      thumbnailUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091315979113472040/Kolia_futuristic_heavy_construction_machine_1208da47-a4a0-436e-a79a-458214276f22.png?width=150&height=150',
      caption: 'Photo: Tim Marshall',
      credit: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      messages: [
        { user: 'Charlie', text: 'What is this...this UNIT !' },
        { user: 'David', text: 'Are we about to produce those ?' },
      ],
    },
    {
      id: 3,
      url: 'https://cdn.discordapp.com/attachments/1030197119304355870/1091455814545457212/Kolia_beach_beautiful_sand_waves_tropical_trees_peace_of_paradi_37483d0f-7451-4c1e-8f47-153c746c8ce7.png',
      thumbnailUrl:
        'https://cdn.discordapp.com/attachments/1030197119304355870/1091455814545457212/Kolia_beach_beautiful_sand_waves_tropical_trees_peace_of_paradi_37483d0f-7451-4c1e-8f47-153c746c8ce7.png',
      caption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      credit: 'A piece of paradyse, by Duncan MacLeod',
      messages: [
        { user: 'Eva', text: 'I want my toes int that sand, right now !' },
        { user: 'Frank', text: 'Sign me in !' },
      ],
    },
  ];

  constructor() {}

  getChatById(id: number) {
    return this.chats.find((chat) => chat.id === id);
  }

  sendMessage(chatId: number, message: { user: string; text: string }): void {
    const chat = this.chats.find((chat) => chat.id === chatId);
    if (chat) {
      chat.messages.push(message);
    } else {
      console.error(`Chat with id ${chatId} not found`);
    }
  }
}
