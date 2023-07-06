import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { IotLandingPageComponent } from './Modules/internet-of-things/Pages/iot-landing-page/iot-landing-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'iot', component: IotLandingPageComponent },
  {
    path: 'cyber',
    loadChildren: () =>
      import('./Modules/cyber-security/cyber-security.module').then((m) => m.CyberSecurityModule),
  },
  { path: 'watchlist', component: CartPageComponent },
  {
    path: 'crypto',
    loadChildren: () =>
      import('./Modules/crypto/crypto.module').then((m) => m.CryptoModule),
  },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
