import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSimpleAutocompleteComponent } from './components/ng-simple-autocomplete/ng-simple-autocomplete.component';
import { FilterPipe } from './pipes/filter.pipe';
import {FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgSimpleAutocompleteComponent, FilterPipe],
  exports: [NgSimpleAutocompleteComponent]
})
export class NgSimpleAutocompleteModule { }
