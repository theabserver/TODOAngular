import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxListComponent } from './component/BoxList/BoxList.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BoxListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
