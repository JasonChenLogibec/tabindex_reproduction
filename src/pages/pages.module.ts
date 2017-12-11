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
import {PageTwelveComponent} from './page-twelve.component';
import {PageThirteenComponent} from './page-thirteen.component';
import {PageFourteenComponent} from './page-fourteen.component';
import {PageFifteenComponent} from './page-fifteen.component';
import {PageSixteenComponent} from './page-sixteen.component';
import {PageSeventeenComponent} from './page-seventeen.component';
import {PageEighteenComponent} from './page-eighteen.component';

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
    PageElevenComponent,
    PageTwelveComponent,
    PageThirteenComponent,
    PageFourteenComponent,
    PageFifteenComponent,
    PageSixteenComponent,
    PageSeventeenComponent,
    PageEighteenComponent
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
    PageElevenComponent,
    PageTwelveComponent,
    PageThirteenComponent,
    PageFourteenComponent,
    PageFifteenComponent,
    PageSixteenComponent,
    PageSeventeenComponent,
    PageEighteenComponent
  ]
})
export class PagesModule {
}
