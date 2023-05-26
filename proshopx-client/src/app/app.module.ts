import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductPageComponent,
    CartPageComponent,
    UserProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
