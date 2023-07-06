import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { IotLandingPageComponent } from './Modules/internet-of-things/Pages/iot-landing-page/iot-landing-page.component';
import { CryptoModule } from './Modules/crypto/crypto.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CyberSecurityModule } from './Modules/cyber-security/cyber-security.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserProfileComponent,
    IotLandingPageComponent,
    DiscussionForumComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CryptoModule,
    CyberSecurityModule,
    MatCardModule
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
