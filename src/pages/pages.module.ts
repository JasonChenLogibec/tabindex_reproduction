import {NgModule} from '@angular/core';
import {FieldsModule} from '../fields/fields.module';
import {PageTwoComponent} from './page-two.component';
import {PageFiveComponent} from './page-five.component';
import {PageThreeComponent} from './page-three.component';
import {PageSixComponent} from './page-six.component';
import {PageSevenComponent} from './page-seven.component';

@NgModule({
  imports: [FieldsModule],
  declarations: [
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent
  ],
  exports: [
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent
  ]
})
export class PagesModule {
}
