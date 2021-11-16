import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular'; // TOFIX: Double token fetch

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'main',  loadChildren: () => import('@full-stack/fe/main').then(m => m.FeMainModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
