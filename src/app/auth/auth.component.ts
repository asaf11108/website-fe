import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

  constructor(private auth: AuthService) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logoutWithRedirect(): void {
    this.auth.logout();
  }

}
