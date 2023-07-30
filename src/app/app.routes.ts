import { Routes } from '@angular/router';
import { AuthenticatorGuard } from './guards/authenticator.guard';

export const AppRouter: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'player',
    loadChildren: () =>
      import('./pages/player/player.module').then((m) => m.PlayerModule),
    canLoad: [AuthenticatorGuard],
  },
];
