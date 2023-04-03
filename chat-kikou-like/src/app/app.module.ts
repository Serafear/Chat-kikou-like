import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '../auth/auth.module';
import { ChatModule } from '../chat/chat.module';
//import { JwtInterceptor, JwtModule } from '@auth0/angular-jwt';

/*export function tokenGetter() {
  return localStorage.getItem('token');
}*/

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ChatModule,
    /* JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['example.com'], 
        disallowedRoutes: [], // Ajout de routes spécifiques si nécessaire
      },
    }),*/
  ],
  providers: [
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
