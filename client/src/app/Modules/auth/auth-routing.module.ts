import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInOutComponent } from './sign-in-out/sign-in-out.component';

const routes: Routes = [
  {
    path: '',
    component: SignInOutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
