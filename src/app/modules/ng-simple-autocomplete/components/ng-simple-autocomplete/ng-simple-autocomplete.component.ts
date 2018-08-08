import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef} from '@angular/core';


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
  @Input() multiSelect: boolean = false; 
  @ViewChild('itemList') itemList: ElementRef;
  @ViewChild('inputBox') inputBox: ElementRef;
  selectedItemIndex = -1;
  showDropDown = false;
  searchText = '';
  mutliSelectedArray: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown(val) {
    if (val === 'focus') {
      this.showDropDown = true;
      this.selectedItemIndex = -1;
    } else {
        this.showDropDown = false;
    }
  }
  selectValue(item) {
  
    if(this.multiSelect){
      this.mutliSelectedArray.push(item);
      this.onSelect.emit(this.mutliSelectedArray);
      this.searchText = '';
      this.selectedItemIndex = -1;
    } else {
      this.searchText = this.fieldNameFormatter(item);
      this.onSelect.emit(item);
      this.selectedItemIndex = -1;
    }
    
  }
  selectItemByKeyboard(keyCode) {
    if (keyCode === 40) {
      // down key pressed
      const numberOfFilteredElements = this.itemList.nativeElement.children.length -1;
      if (this.selectedItemIndex < numberOfFilteredElements) {
        this.selectedItemIndex++;
      }
      
    } else if (keyCode === 38){
      // up key pressed
      if (this.selectedItemIndex > 0) {
        this.selectedItemIndex--;
      }
    } else if (keyCode === 13) {
      // enter key pressed
      const selectdValue:string = this.itemList.nativeElement.children[this.selectedItemIndex].innerHTML;
      for (let i=0; i<this.sourceArray.length; i++) {
        const value: string = this.fieldNameFormatter(this.sourceArray[i]);
        if (selectdValue.trim() === value.trim()){
          this.selectValue(this.sourceArray[i]);
          this.inputBox.nativeElement.blur();
          break;
        }
      }
    }
  }
  updateSelectedItemIndex(index){
    this.selectedItemIndex = index;
  }
  onInputChange(val) {
    this.selectedItemIndex  = -1;
  } 

  focusInput(){
    this.inputBox.nativeElement.focus();
  }
  removeFromSeletedArray(index){
    this.mutliSelectedArray.splice(index, 1);
  }
}
