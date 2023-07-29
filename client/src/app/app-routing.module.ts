import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'cyber',
    loadChildren: () =>
      import('./Modules/cyber-security/cyber-security.module').then(
        (m) => m.CyberSecurityModule
      ),
  },
  {
    path: 'crypto',
    loadChildren: () =>
      import('./Modules/crypto/crypto.module').then((m) => m.CryptoModule),
  },
  {
    path: 'iot',
    loadChildren: () =>
      import('./Modules/internet-of-things/internet-of-things.module').then(
        (m) => m.InternetOfThingsModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./Modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./Modules/core/core.module').then((m) => m.CoreModule),
  },

  { path: 'alerts', component: CartPageComponent },
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
