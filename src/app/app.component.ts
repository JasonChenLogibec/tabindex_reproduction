import { Component } from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: AmbientModel = {
    isRequired: (id) => this.model.properties[id] && this.model.properties[id].enabled && this.model.properties[id].enabled.currentValue && this.model.properties[id].visible && this.model.properties[id].visible.currentValue && this.model.properties[id].optional && !this.model.properties[id].optional.currentValue,
    form: { data: {} },
    properties: {}
  };

  radioConfiguration = {
    '675': '1',
    '676': '1',
    '677': '1',
    '703': '2',
    '704': '2',
    '705': '2',
    '706': '3',
    '707': '3',
    '708': '3',
    '709': '4',
    '710': '4',
    '711': '4',
    '712': '5',
    '713': '5',
    '714': '5'
  };
}
