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
}
