import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-item',
  template: `<p>{{ name }}</p>`,
  styles: [],
})
export class ContactsItemComponent implements OnInit {
  @Input() name: string = null;

  constructor() {}

  ngOnInit(): void {}
}
