import {Component, Input, OnInit} from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';

@Component({
  selector: 'page-five',
  styleUrls: ['./page.css'],
  templateUrl: './page-five.component.html'
})
export class PageFiveComponent implements OnInit {
  @Input()
  model: AmbientModel;

  ngOnInit(): void {
    this.model.properties['Btn46'] = {"enabled":{"currentValue":true},"visible":{"currentValue":true},"brushColor":{"currentValue":"silver"},"fontColor":{"currentValue":"black"},"fontStyle":{"currentValue":1}};
    this.model.properties['Btn47'] = {"enabled":{"currentValue":false},"visible":{"currentValue":true},"brushColor":{"currentValue":"silver"},"fontColor":{"currentValue":"black"},"fontStyle":{"currentValue":5}};
    this.model.properties['Img50'] = {"enabled":{"currentValue":false},"visible":{"currentValue":true},"brushColor":{"currentValue":"white"},"brushStyle":{"currentValue":1},"fontColor":{"currentValue":"black"},"image":{"currentValue":"424DE61D000000000000360000002800000032000000320000000100180000000000B01D0000000000000000000000000000000000004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1220000"}};
    this.model.properties['Btn51'] = {"enabled":{"currentValue":true},"visible":{"currentValue":true},"brushColor":{"currentValue":"silver"},"fontColor":{"currentValue":"black"},"fontStyle":{"currentValue":1}};
    this.model.properties['Btn52'] = {"enabled":{"currentValue":true},"visible":{"currentValue":true},"brushColor":{"currentValue":"silver"},"fontColor":{"currentValue":"black"},"fontStyle":{"currentValue":1}};
    this.model.properties['Btn53'] = {"enabled":{"currentValue":false},"visible":{"currentValue":true},"brushColor":{"currentValue":"silver"},"fontColor":{"currentValue":"black"},"fontStyle":{"currentValue":5}};
    this.model.properties['Img54'] = {"enabled":{"currentValue":false},"visible":{"currentValue":true},"brushColor":{"currentValue":"white"},"brushStyle":{"currentValue":1},"fontColor":{"currentValue":"black"},"image":{"currentValue":"424DE61D000000000000360000002800000032000000320000000100180000000000B01D0000000000000000000000000000000000004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB12200004CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1224CB1220000"}};
    this.model.properties['Btn55'] = {"enabled":{"currentValue":true},"visible":{"currentValue":true},"brushColor":{"currentValue":"silver"},"fontColor":{"currentValue":"black"},"fontStyle":{"currentValue":1}};
    this.model.properties['Line56'] = {"visible":{"currentValue":true},"brushColor":{"currentValue":"white"},"brushStyle":{"currentValue":1},"fontColor":{"currentValue":"black"}};
    this.model.properties['Line57'] = {"visible":{"currentValue":true},"brushColor":{"currentValue":"white"},"brushStyle":{"currentValue":1},"fontColor":{"currentValue":"black"}};
  }

  Btn46 = {"objectType":"button","componentId":"Btn46","zIndex":0,"width":150,"height":25,"left":85,"top":150,"isTransparent":false,"text":"Aucune macro","fontFamily":"\"Arial\"","fontStyle":"b","fontSize":"8pt"};
  Btn47 = {"objectType":"button","componentId":"Btn47","zIndex":1,"width":150,"height":50,"left":85,"top":190,"isTransparent":false,"text":"&#192;ucune macr&#244; avec texte trop long","fontFamily":"\"Arial\"","fontStyle":"bu","fontSize":"10pt"};
  Img50 = {"objectType":"image","componentId":"Img50","zIndex":2,"width":50,"height":50,"left":87,"top":256};
  Btn51 = {"objectType":"button","componentId":"Btn51","zIndex":3,"width":54,"height":54,"left":85,"top":254,"isTransparent":true,"fontFamily":"\"Arial\"","fontStyle":"b","fontSize":"8pt"};
  Btn52 = {"objectType":"button","componentId":"Btn52","zIndex":4,"width":150,"height":25,"left":317,"top":150,"isTransparent":false,"text":"Avec alerte","fontFamily":"\"Arial\"","fontStyle":"b","fontSize":"8pt"};
  Btn53 = {"objectType":"button","componentId":"Btn53","zIndex":5,"width":150,"height":50,"left":317,"top":190,"isTransparent":false,"text":"&#192;vec alerte et &#226;vec texte trop long","fontFamily":"\"Arial\"","fontStyle":"bu","fontSize":"10pt"};
  Img54 = {"objectType":"image","componentId":"Img54","zIndex":6,"width":50,"height":50,"left":319,"top":256};
  Btn55 = {"objectType":"button","componentId":"Btn55","zIndex":7,"width":54,"height":54,"left":317,"top":254,"isTransparent":true,"fontFamily":"\"Arial\"","fontStyle":"b","fontSize":"8pt"};
  Line56 = {"objectType":"line","componentId":"Line56","zIndex":8,"width":150,"height":1,"left":85,"top":149,"x1":85,"x2":234,"y1":149,"y2":149,"lineWidth":1,"lineStyle":0,"lineColor":"red"};
  Line57 = {"objectType":"line","componentId":"Line57","zIndex":9,"width":1,"height":25,"left":84,"top":150,"x1":84,"x2":84,"y1":150,"y2":174,"lineWidth":1,"lineStyle":0,"lineColor":"blue"};
}
