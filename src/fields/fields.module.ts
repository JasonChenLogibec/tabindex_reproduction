import {NgModule} from '@angular/core';
import {LineComponent} from './line.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {ImageComponent} from './image.component';
import {TextInputComponent} from './text-input.component';
import {MaskInputComponent} from './mask-input.component';
import {DateTimeInputComponent} from './date-time-input.component';
import {NumberInputComponent} from './number-input.component';
import {TimeInputComponent} from './time-input.component';
import {MemoComponent} from './memo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    LineComponent,
    ImageComponent,
    ButtonComponent,
    TextInputComponent,
    MaskInputComponent,
    NumberInputComponent,
    DateTimeInputComponent,
    TimeInputComponent,
    MemoComponent
  ], exports : [
    LineComponent,
    ImageComponent,
    ButtonComponent,
    TextInputComponent,
    MaskInputComponent,
    NumberInputComponent,
    DateTimeInputComponent,
    TimeInputComponent,
    MemoComponent
  ]
})
export class FieldsModule {
}
