import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { LandingBoardComponent } from './Components/landing-board/landing-board.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';

@NgModule({
  declarations: [HomepageComponent, LandingBoardComponent, NotFoundComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
