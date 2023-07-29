import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CyberSecurityRoutingModule } from './cyber-security-routing.module';
import { CyberLandingComponent } from './Pages/cyber-landing/cyber-landing.component';


@NgModule({
  declarations: [
    CyberLandingComponent
  ],
  imports: [
    CommonModule,
    CyberSecurityRoutingModule
  ]
})
export class CyberSecurityModule { }
