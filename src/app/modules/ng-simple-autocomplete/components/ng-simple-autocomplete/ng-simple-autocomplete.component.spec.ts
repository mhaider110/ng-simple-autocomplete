import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgSimpleAutocompleteComponent } from './ng-simple-autocomplete.component';
import { FilterPipe } from '../../pipes/filter.pipe';

describe('NgSimpleAutocompleteComponent', () => {
  let component: NgSimpleAutocompleteComponent;
  let fixture: ComponentFixture<NgSimpleAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSimpleAutocompleteComponent, FilterPipe],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
