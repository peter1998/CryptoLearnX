import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from 'src/app/Services/user.service';

@NgModule({
  declarations: [ProfileComponent],
  providers: [UserService],
  imports: [CommonModule, UserRoutingModule, MatCardModule],
})
export class UserModule {}
