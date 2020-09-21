import { NgModule } from '@angular/core';
import { UiSantanderComponent } from './ui-santander.component';
import { PruebaComponent } from './components/prueba/prueba.component';



@NgModule({
  declarations: [UiSantanderComponent, PruebaComponent],
  imports: [
  ],
  exports: [UiSantanderComponent]
})
export class UiSantanderModule { }
