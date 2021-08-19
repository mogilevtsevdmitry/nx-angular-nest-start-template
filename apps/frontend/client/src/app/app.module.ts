import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiComponentModule } from '@mda/ui-component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
