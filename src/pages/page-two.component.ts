import {Component, Input, OnInit} from '@angular/core';
import {AmbientModel} from '../definitions/form.definitions';

@Component({
  selector: 'page-two',
  styleUrls: ['./page.css'],
  template: `
    <form-line [component]="Line6" [style.top]="Line6.top + 'px'" [style.left]="Line6.left + 'px'" [style.height]="Line6.height + 'px'"
               [style.width]="Line6.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line7" [style.top]="Line7.top + 'px'" [style.left]="Line7.left + 'px'" [style.height]="Line7.height + 'px'"
               [style.width]="Line7.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line8" [style.top]="Line8.top + 'px'" [style.left]="Line8.left + 'px'" [style.height]="Line8.height + 'px'"
               [style.width]="Line8.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line9" [style.top]="Line9.top + 'px'" [style.left]="Line9.left + 'px'" [style.height]="Line9.height + 'px'"
               [style.width]="Line9.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line10" [style.top]="Line10.top + 'px'" [style.left]="Line10.left + 'px'" [style.height]="Line10.height + 'px'"
               [style.width]="Line10.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line11" [style.top]="Line11.top + 'px'" [style.left]="Line11.left + 'px'" [style.height]="Line11.height + 'px'"
               [style.width]="Line11.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line12" [style.top]="Line12.top + 'px'" [style.left]="Line12.left + 'px'" [style.height]="Line12.height + 'px'"
               [style.width]="Line12.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line13" [style.top]="Line13.top + 'px'" [style.left]="Line13.left + 'px'" [style.height]="Line13.height + 'px'"
               [style.width]="Line13.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line14" [style.top]="Line14.top + 'px'" [style.left]="Line14.left + 'px'" [style.height]="Line14.height + 'px'"
               [style.width]="Line14.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line15" [style.top]="Line15.top + 'px'" [style.left]="Line15.left + 'px'" [style.height]="Line15.height + 'px'"
               [style.width]="Line15.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line16" [style.top]="Line16.top + 'px'" [style.left]="Line16.left + 'px'" [style.height]="Line16.height + 'px'"
               [style.width]="Line16.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line17" [style.top]="Line17.top + 'px'" [style.left]="Line17.left + 'px'" [style.height]="Line17.height + 'px'"
               [style.width]="Line17.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line18" [style.top]="Line18.top + 'px'" [style.left]="Line18.left + 'px'" [style.height]="Line18.height + 'px'"
               [style.width]="Line18.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line19" [style.top]="Line19.top + 'px'" [style.left]="Line19.left + 'px'" [style.height]="Line19.height + 'px'"
               [style.width]="Line19.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line20" [style.top]="Line20.top + 'px'" [style.left]="Line20.left + 'px'" [style.height]="Line20.height + 'px'"
               [style.width]="Line20.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line21" [style.top]="Line21.top + 'px'" [style.left]="Line21.left + 'px'" [style.height]="Line21.height + 'px'"
               [style.width]="Line21.width + 'px'" [model]="model"></form-line>
    <form-line [component]="Line22" [style.top]="Line22.top + 'px'" [style.left]="Line22.left + 'px'" [style.height]="Line22.height + 'px'"
               [style.width]="Line22.width + 'px'" [model]="model"></form-line>
  `
})
export class PageTwoComponent implements OnInit {
  ngOnInit() {
    this.model.properties['Line6'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line7'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line8'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line9'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line10'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line11'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line12'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line13'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line14'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line15'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line16'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line17'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line18'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line19'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line20'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line21'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
    this.model.properties['Line22'] = {
      'visible': {'currentValue': true},
      'brushColor': {'currentValue': 'white'},
      'brushStyle': {'currentValue': 1},
      'fontColor': {'currentValue': 'black'}
    };
  }

  @Input()
  model: AmbientModel;

  Line6 = {
    'objectType': 'line',
    'componentId': 'Line6',
    'zIndex': 0,
    'width': 150,
    'height': 1,
    'left': 50,
    'top': 49,
    'x1': 50,
    'x2': 199,
    'y1': 49,
    'y2': 49,
    'lineWidth': 1,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line7 = {
    'objectType': 'line',
    'componentId': 'Line7',
    'zIndex': 1,
    'width': 1,
    'height': 50,
    'left': 49,
    'top': 50,
    'x1': 49,
    'x2': 49,
    'y1': 50,
    'y2': 99,
    'lineWidth': 1,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line8 = {
    'objectType': 'line',
    'componentId': 'Line8',
    'zIndex': 2,
    'width': 1,
    'height': 50,
    'left': 200,
    'top': 50,
    'x1': 200,
    'x2': 200,
    'y1': 50,
    'y2': 99,
    'lineWidth': 1,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line9 = {
    'objectType': 'line',
    'componentId': 'Line9',
    'zIndex': 3,
    'width': 150,
    'height': 1,
    'left': 50,
    'top': 100,
    'x1': 50,
    'x2': 199,
    'y1': 100,
    'y2': 100,
    'lineWidth': 1,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line10 = {
    'objectType': 'line',
    'componentId': 'Line10',
    'zIndex': 4,
    'width': 154,
    'height': 5,
    'left': 48,
    'top': 143,
    'x1': 50,
    'x2': 199,
    'y1': 145,
    'y2': 145,
    'lineWidth': 5,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line11 = {
    'objectType': 'line',
    'componentId': 'Line11',
    'zIndex': 5,
    'width': 5,
    'height': 54,
    'left': 43,
    'top': 148,
    'x1': 45,
    'x2': 45,
    'y1': 150,
    'y2': 199,
    'lineWidth': 5,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line12 = {
    'objectType': 'line',
    'componentId': 'Line12',
    'zIndex': 6,
    'width': 5,
    'height': 54,
    'left': 203,
    'top': 148,
    'x1': 205,
    'x2': 205,
    'y1': 150,
    'y2': 199,
    'lineWidth': 5,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line13 = {
    'objectType': 'line',
    'componentId': 'Line13',
    'zIndex': 7,
    'width': 154,
    'height': 5,
    'left': 48,
    'top': 203,
    'x1': 50,
    'x2': 199,
    'y1': 205,
    'y2': 205,
    'lineWidth': 5,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line14 = {
    'objectType': 'line',
    'componentId': 'Line14',
    'zIndex': 8,
    'width': 159,
    'height': 10,
    'left': 45,
    'top': 235,
    'x1': 50,
    'x2': 199,
    'y1': 240,
    'y2': 240,
    'lineWidth': 10,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line15 = {
    'objectType': 'line',
    'componentId': 'Line15',
    'zIndex': 9,
    'width': 10,
    'height': 59,
    'left': 35,
    'top': 245,
    'x1': 40,
    'x2': 40,
    'y1': 250,
    'y2': 299,
    'lineWidth': 10,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line16 = {
    'objectType': 'line',
    'componentId': 'Line16',
    'zIndex': 10,
    'width': 10,
    'height': 59,
    'left': 205,
    'top': 245,
    'x1': 210,
    'x2': 210,
    'y1': 250,
    'y2': 299,
    'lineWidth': 10,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line17 = {
    'objectType': 'line',
    'componentId': 'Line17',
    'zIndex': 11,
    'width': 159,
    'height': 10,
    'left': 45,
    'top': 305,
    'x1': 50,
    'x2': 199,
    'y1': 310,
    'y2': 310,
    'lineWidth': 10,
    'lineStyle': 0,
    'lineColor': '#400000'
  };
  Line18 = {
    'objectType': 'line',
    'componentId': 'Line18',
    'zIndex': 12,
    'width': 142,
    'height': 41,
    'left': 301,
    'top': 51,
    'x1': 301,
    'x2': 442,
    'y1': 51,
    'y2': 91,
    'lineWidth': 1,
    'lineStyle': 1,
    'lineColor': '#400000'
  };
  Line19 = {
    'objectType': 'line',
    'componentId': 'Line19',
    'zIndex': 13,
    'width': 143,
    'height': 62,
    'left': 300,
    'top': 114,
    'x1': 301,
    'x2': 442,
    'y1': 115,
    'y2': 175,
    'lineWidth': 2,
    'lineStyle': 2,
    'lineColor': 'red'
  };
  Line20 = {
    'objectType': 'line',
    'componentId': 'Line20',
    'zIndex': 14,
    'width': 144,
    'height': 93,
    'left': 300,
    'top': 178,
    'x1': 301,
    'x2': 442,
    'y1': 179,
    'y2': 269,
    'lineWidth': 3,
    'lineStyle': 3,
    'lineColor': 'blue'
  };
  Line21 = {
    'objectType': 'line',
    'componentId': 'Line21',
    'zIndex': 15,
    'width': 147,
    'height': 126,
    'left': 298,
    'top': 240,
    'x1': 301,
    'x2': 442,
    'y1': 243,
    'y2': 363,
    'lineWidth': 6,
    'lineStyle': 4,
    'lineColor': '#FF8000'
  };
  Line22 = {
    'objectType': 'line',
    'componentId': 'Line22',
    'zIndex': 16,
    'width': 151,
    'height': 160,
    'left': 296,
    'top': 310,
    'x1': 442,
    'x2': 301,
    'y1': 465,
    'y2': 315,
    'lineWidth': 10,
    'lineStyle': 6,
    'lineColor': 'green'
  };
}
