import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IotLandingPageComponent } from './Pages/iot-landing-page/iot-landing-page.component';

const routes: Routes = [{ path: '', component: IotLandingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternetOfThingsRoutingModule {}
