import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './Components/alert/alert.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [AlertComponent, NavigationBarComponent],
  imports: [CommonModule],
  exports: [AlertComponent, NavigationBarComponent],
})
export class SharedModule {}
