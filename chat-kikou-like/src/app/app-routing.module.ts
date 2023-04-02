import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/components/login/login.component';
import { RegisterComponent } from '../auth/components/register/register.component';
import { ForgotPasswordComponent } from '../auth/components/forgot-password/forgot-password.component';
import { MainChatComponent } from '../chat/components/main-chat/main-chat.component';
import { UserProfileComponent } from '../chat/components/user-profile/user-profile.component';
import { ChatWindowComponent } from '../chat/components/chat-window/chat-window.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'main-chat', component: MainChatComponent },
  { path: 'user-profile', component: UserProfileComponent },
  //{ path: 'user-profile/:userId', component: UserProfileComponent },
  { path: 'chat/:id/:caption', component: ChatWindowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
