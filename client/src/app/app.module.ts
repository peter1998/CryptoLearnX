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
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
