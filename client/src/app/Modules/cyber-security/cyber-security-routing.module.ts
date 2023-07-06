import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberLandingComponent } from './Pages/cyber-landing/cyber-landing.component';

const routes: Routes = [{ path: '', component: CyberLandingComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyberSecurityRoutingModule {}
