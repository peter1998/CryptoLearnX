import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomepageComponent } from './Pages/homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
