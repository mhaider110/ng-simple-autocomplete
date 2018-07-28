import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'ng-simple-autocomplete',
  templateUrl: './ng-simple-autocomplete.component.html',
  styleUrls: ['./ng-simple-autocomplete.component.css']
})
export class NgSimpleAutocompleteComponent implements OnInit {

  @Input() placeholder = '';
  @Input() sourceArray = [];
  @Input() fieldNameFormatter:(value: any) => string;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  showDropDown = false;
  searchText = '';
  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(val) {
    if (val === 'focus') {
      this.showDropDown = true;
    } else {
      const context = this;
      setTimeout(function () {
        context.showDropDown = false;
      }, 300);

    }
  }
  selectValue(item) {
    this.searchText = this.fieldNameFormatter(item);
    this.onSelect.emit(item);
  } 
}
