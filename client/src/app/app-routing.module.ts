import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { IotLandingPageComponent } from './Modules/internet-of-things/Pages/iot-landing-page/iot-landing-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'iot', component: IotLandingPageComponent },
  { path: 'cybersecurity', component: CyberSecurityComponent },
  { path: 'watchlist', component: CartPageComponent },
  {
    path: 'crypto',
    loadChildren: () =>
      import('./Modules/crypto/crypto.module').then((m) => m.CryptoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
