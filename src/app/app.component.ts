import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  placeholder = "Search";
  // source array
  data = [{
    'code': '01',
    'day': [{
      'lang': 'english',
      'value': 'Sunday'
    }, {
      'lang': 'french',
      'value': 'dimanche'
    }],
    'month': [{
      'lang': 'english',
      'value': 'May'
    }, {
      'lang': 'french',
      'value': 'Mai'
    }]
  },
  {
    'code': '02',
    'day': [{
      'lang': 'english',
      'value': 'Monday'
    }, {
      'lang': 'french',
      'value': 'Lundi'
    }],
    'month': [{
      'lang': 'english',
      'value': 'June'
    }, {
      'lang': 'french',
      'value': 'juin'
    }]
  },
  {
    'code': '03',
    'day': [{
      'lang': 'english',
      'value': 'Tuesday'
    }, {
      'lang': 'french',
      'value': 'Mardi'
    }],
    'month': [{
      'lang': 'english',
      'value': 'July'
    }, {
      'lang': 'french',
      'value': 'juillet'
    }]
  },
  {
    'code': '03',
    'day': [{
      'lang': 'english',
      'value': 'Wednesday'
    }, {
      'lang': 'french',
      'value': 'Mardi'
    }],
    'month': [{
      'lang': 'english',
      'value': 'July'
    }, {
      'lang': 'french',
      'value': 'juillet'
    }]
  },
  {
    'code': '03',
    'day': [{
      'lang': 'english',
      'value': 'Thursday'
    }, {
      'lang': 'french',
      'value': 'Mardi'
    }],
    'month': [{
      'lang': 'english',
      'value': 'July'
    }, {
      'lang': 'french',
      'value': 'juillet'
    }]
  },
  {
    'code': '03',
    'day': [{
      'lang': 'english',
      'value': 'Friday'
    }, {
      'lang': 'french',
      'value': 'Mardi'
    }],
    'month': [{
      'lang': 'english',
      'value': 'July'
    }, {
      'lang': 'french',
      'value': 'juillet'
    }]
  },
  {
    'code': '03',
    'day': [{
      'lang': 'english',
      'value': 'Saturday'
    }, {
      'lang': 'french',
      'value': 'Mardi'
    }],
    'month': [{
      'lang': 'english',
      'value': 'July'
    }, {
      'lang': 'french',
      'value': 'juillet'
    }]
  }
  ];

  returnFieldFromObject(item) {
    // return field for dropdown item
    return item.day[0].value;

    // return item.day[1].value;
    // return item.month[0].value;
    // return item.month[1].value;
    // return item.code;
  }
  // selected object
  selectedObject(val) {
    console.log(val);
  }
}
