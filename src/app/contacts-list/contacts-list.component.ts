import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ContactsItemComponent } from '../contacts-item/contacts-item.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'contacts-list',
  template: ` <h2>Contacts list of {{ company }}</h2>
    <ng-content></ng-content>
    <contacts-item [name]="'Jack'"></contacts-item>
    <contacts-item [name]="'Daniel'"></contacts-item>`,
  styles: [],
})
export class ContactsListComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() title: string;
  company = 'Google';

  @ViewChild(ContactsItemComponent) vwCh: ContactsItemComponent;
  @ContentChild(ContactsItemComponent) cntCh: ContactsItemComponent;

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit ', this.company);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges: ', changes);
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit ', this.cntCh);
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked ');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit ', this.vwCh);
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
