import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
//import { JwtHelperService } from '@auth0/angular-jwt';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  //service singleton
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string>;
  public token: Observable<string>;

  /*
  interface UserProfile {
  id: number;
  name: string;
  email: string;
}
  */

  private users: Array<{ email: string; password: string }> = [];
  private userProfiles = [
    {
      email: 'test@example.fr',
      password: 'Mdp123',
      token: 'fake_token_1',
      avatarUrl:
        'https://media.discordapp.net/attachments/1030197119304355870/1091355921747279955/Kolia_circular_profile_photo_man_beautiful_glasses_d57aac53-baf8-46d2-8118-4612da11ec96.png?width=150&height=150',
      name: 'Nicolas',
      surname: 'Condé',
      position: 'Web Developer',
      summary:
        "Ceci n'est pas un message subliminal: je suis le candidat qu'il vous faut",
    },
    {
      email: 'another@example.com',
      password: 'Mdp124',
      token: 'fake_token_2',
      avatarUrl:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?fit=crop&w=150&h=150',
      name: 'Jane',
      surname: 'Doe',
      position: 'Software Developer',
      summary: 'Experienced software developer with a passion for coding.',
    },
  ];

  constructor() {
    //création d'une nouvelle instance de classe qui crée un nouel observable le nouvel observable
    //token.subject
    this.tokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('token') || ''
      //private http: HttpClient
    );
    this.token = this.tokenSubject.asObservable();
  }

  //on définit le getter tokenvalue
  public get tokenValue(): string {
    return this.tokenSubject.value;
  }

  register(email: string, password: string): Observable<any> {
    // Est ce que l'utilisateur existe ?
    const existingUser = this.users.find((user) => user.email === email);

    if (existingUser) {
      // si il existe déjà renvoi une erreur
      return of({ success: false, message: 'User already exists' }).pipe(
        delay(1000)
      );
    } else {
      // Si il n'existe pas encore, register le
      this.users.push({ email, password });

      // Simulate a registration error
      if (Math.random() < 0.5) {
        throw new Error('Registration failed');
      }

      // Retourne un message ou un token ou une data au besoin
      return of({ success: true, message: 'Registration successful' }).pipe(
        delay(1000)
      );
    }
  }

  login(email: string, password: string): Observable<any> {
    // On simule l'appel API
    //On ajuste la paire email / mot de passe valides
    const validCredentials = [
      { email: 'test@example.fr', password: 'Mdp123' },
      { email: 'another@example.com', password: 'Mdp124' },
    ];

    const isValidCredential = validCredentials.some(
      (cred) => cred.email === email && cred.password === password
    );

    if (isValidCredential) {
      // On récupère le profil user correspondant
      const userProfile = this.userProfiles.find(
        (profile) => profile.email === email && profile.password === password
      );

      if (userProfile) {
        // On utilise un token correspondant au profil
        const token = userProfile.token;

        return of({ token }).pipe(
          //on retourne un observable qui va émettre l'objet contenant le token
          delay(1000),
          map((response) => {
            localStorage.setItem('token', response.token);
            this.tokenSubject.next(response.token);
            return response;
          })
        );
      } else {
        return throwError('User profile not found');
      }
    } else {
      // On Simule un appel API échoué si les identifiants sont incorrects
      return of({ error: 'Invalid email or password' }).pipe(
        delay(1000),
        map(() => {
          throw new Error('Invalid email or password');
        })
      );
    }
  }

  resetPassword(email: string): Observable<any> {
    // On Simule le processus de réinitialisation du mot de passe avec un délai de 1000 ms
    return of({ success: true }).pipe(
      delay(1000),
      map((response) => {
        if (response.success) {
          // La réinitialisation du mot de passe a réussi, on gère la réponse
          console.log('Email de réinitialisation du mot de passe envoyé');
        } else {
          // Géstion de l'échec de la réinitialisation du mot de passe
          throw new Error(
            "Erreur lors de l'envoi de l'email de réinitialisation"
          );
        }
      })
    );
  }

  getUserProfile(): Observable<any> {
    if (this.tokenValue) {
      const userProfile = this.userProfiles.find(
        (profile) => profile.token === this.tokenValue
        /*const url = 'https://example.com/api/user-profile';
          return this.http.get<UserProfile>(url); */
      );

      if (userProfile) {
        return of(userProfile);
      }
    }

    return throwError('User not found');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next('');
  }
}

/* si JWT
export class AuthService {
  private tokenSubject: BehaviorSubject<string>;
  public token: Observable<string>;
  private jwtHelper: JwtHelperService;

  // ...

  constructor() {
    this.tokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('token') || ''
    );
    this.token = this.tokenSubject.asObservable();
    this.jwtHelper = new JwtHelperService();
  }

  // ...

  refreshToken(): Observable<any> {
    // Implementez la logique de rafraîchissement du token d'accès
  

    // Exemple :
    // return this.http.post('https://example.com/api/refresh-token', { refreshToken: this.refreshTokenValue })
    //   .pipe(
    //     map((response) => {
    //       localStorage.setItem('token', response.accessToken);
    //       this.tokenSubject.next(response.accessToken);
    //       return response;
    //     })
    //   );
  }

  // ...

  getUserProfile(): Observable<any> {
    if (this.tokenValue && !this.jwtHelper.isTokenExpired(this.tokenValue)) {
      const userProfile = this.userProfiles.find(
        (profile) => profile.token === this.tokenValue
      );

      if (userProfile) {
        return of(userProfile);
      }
    } else if (this.tokenValue && this.jwtHelper.isTokenExpired(this.tokenValue)) {
      // Le token d'accès est expiré, on le rafraichi
      // Exemple :
      // return this.refreshToken().pipe(
      //   switchMap(() => {
      //     // On récupère le profil après le rafraichissement 
      //     return this.getUserProfile();
      //   })
      // );
    }

    return throwError('User not found');
  }

  // ...
} */

/* pour auth.guard
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // On vérifie si le token existe et est valide
    return !!token;
  }
}
*/
