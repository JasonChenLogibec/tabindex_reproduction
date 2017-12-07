import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HelperModule} from '../helpers/helper.module';
import {PagesModule} from '../pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    HelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
