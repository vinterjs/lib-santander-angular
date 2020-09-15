import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiSantanderModule } from 'ui-santander';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSantanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
