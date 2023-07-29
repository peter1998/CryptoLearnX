import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternetOfThingsRoutingModule } from './internet-of-things-routing.module';
import { IotLandingPageComponent } from './Pages/iot-landing-page/iot-landing-page.component';


@NgModule({
  declarations: [
    IotLandingPageComponent
  ],
  imports: [
    CommonModule,
    InternetOfThingsRoutingModule
  ]
})
export class InternetOfThingsModule { }
