import { Component } from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: AmbientModel = {
    properties: {}
  };
}
