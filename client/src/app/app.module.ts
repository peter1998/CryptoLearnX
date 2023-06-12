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
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './Modules/shared/alert/alert.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PriceMonitorService } from './Services/price-monitor.service';
import { CryptoComparisonComponent } from './Modules/crypto/Components/crypto-comparison/crypto-comparison.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { LearningResourceService } from './Services/crypto-learning-resource.service';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './Modules/shared/shared.module';

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
    TooltipModule.forRoot(),
    CryptoModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
