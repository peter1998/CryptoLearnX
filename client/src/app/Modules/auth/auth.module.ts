import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInOutComponent } from './sign-in-out/sign-in-out.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInOutComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
