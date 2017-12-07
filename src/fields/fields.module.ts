import {NgModule} from '@angular/core';
import {LineComponent} from './line.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {ImageComponent} from './image.component';
import {TextInputComponent} from './text-input.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    LineComponent,
    ImageComponent,
    ButtonComponent,
    TextInputComponent
  ], exports : [
    LineComponent,
    ImageComponent,
    ButtonComponent,
    TextInputComponent
  ]
})
export class FieldsModule {
}
