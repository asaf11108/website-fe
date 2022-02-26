import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    Auth0Module.forRoot({
      domain: 'dev-u314zv4o.us.auth0.com',
      clientId: 'fTGQpEVsSqfPnv2d5IUiNd95c2injPCE',
      redirectUri: environment.feUrl,
      errorPath: '/login',
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.basePath}/api/*`,
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
