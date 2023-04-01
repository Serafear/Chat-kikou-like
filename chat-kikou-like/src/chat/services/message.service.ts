import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  fetchCaptions(): Observable<string[]> {
    const captions = [
      'Caption 1 from API',
      'Caption 2 from API',
      'Caption 3 from API',
      'Caption 4 from API',
      'Caption 5 from API',
      'Caption 6 from API',
    ];

    // Simulate a 1-second API call delay
    return of(captions).pipe(delay(1000));
  }
}
