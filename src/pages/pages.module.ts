import {NgModule} from '@angular/core';
import {FieldsModule} from '../fields/fields.module';
import {PageTwoComponent} from './page-two.component';
import {PageFiveComponent} from './page-five.component';
import {PageThreeComponent} from './page-three.component';
import {PageSixComponent} from './page-six.component';

@NgModule({
  imports: [FieldsModule],
  declarations: [
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageSixComponent
  ],
  exports: [
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageSixComponent
  ]
})
export class PagesModule {
}
