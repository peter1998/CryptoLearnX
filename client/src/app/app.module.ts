import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { IotLandingPageComponent } from './Modules/internet-of-things/Pages/iot-landing-page/iot-landing-page.component';
import { CryptoModule } from './Modules/crypto/crypto.module';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,

    UserProfileComponent,
    IotLandingPageComponent,
    CyberSecurityComponent,
    DiscussionForumComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    CryptoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
