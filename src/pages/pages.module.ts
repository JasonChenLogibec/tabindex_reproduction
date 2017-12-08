import {NgModule} from '@angular/core';
import {FieldsModule} from '../fields/fields.module';
import {PageTwoComponent} from './page-two.component';
import {PageFiveComponent} from './page-five.component';
import {PageThreeComponent} from './page-three.component';
import {PageSixComponent} from './page-six.component';
import {PageSevenComponent} from './page-seven.component';
import {PageNineComponent} from './page-nine.component';
import {PageEightComponent} from './page-eight.component';
import {PageTenComponent} from './page-ten.component';
import {PageElevenComponent} from './page-eleven.component';

@NgModule({
  imports: [FieldsModule],
  declarations: [
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    PageEightComponent,
    PageNineComponent,
    PageTenComponent,
    PageElevenComponent
  ],
  exports: [
    PageTwoComponent,
    PageThreeComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    PageEightComponent,
    PageNineComponent,
    PageTenComponent,
    PageElevenComponent
  ]
})
export class PagesModule {
}
