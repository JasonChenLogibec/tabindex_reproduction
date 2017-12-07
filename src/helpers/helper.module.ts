import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {StyleHelperService} from './style-helper.service';
import {ConstantsModule} from '../definitions/constants.module';

@NgModule({
  imports: [
    BrowserModule,
    ConstantsModule
  ],
  providers: [
    StyleHelperService
  ]
})
export class HelperModule { }
