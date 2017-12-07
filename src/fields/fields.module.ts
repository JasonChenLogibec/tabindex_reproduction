import {NgModule} from '@angular/core';
import {LineComponent} from './line.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from './button.component';
import {ImageComponent} from './image.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    LineComponent,
    ImageComponent,
    ButtonComponent
  ], exports : [
    LineComponent,
    ImageComponent,
    ButtonComponent
  ]
})
export class FieldsModule {
}
