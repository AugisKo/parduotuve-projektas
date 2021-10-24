import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrekesComponent } from './components/prekes/prekes.component';
import { ParduotuveComponent } from './components/parduotuve/parduotuve.component';
import { KrepselisComponent } from './krepselis/krepselis.component';

@NgModule({
  declarations: [
    AppComponent,
    PrekesComponent,
    ParduotuveComponent,
    KrepselisComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
