import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    Auth0Module.forRoot({
      domain: 'dev-vftj-8hu.us.auth0.com',
      clientId: 'kD6iPHFeWwxbjAUUxwY1U2vzS19kYDyd',
      redirectUri: environment.feUrl,
      errorPath: '/login',
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUrl}*`,
            tokenOptions: {
              audience: environment.audience,
            }
          }
        ]
      }
    }),
  ],
  exports: [
    Auth0Module
  ]
})
export class AuthModule { }
