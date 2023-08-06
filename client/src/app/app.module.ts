import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './Modules/shared/shared.module';
//For local testing enviroment
//TODO: change import
import { environment } from '../environments/environment test';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, DiscussionForumComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    MatCardModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
