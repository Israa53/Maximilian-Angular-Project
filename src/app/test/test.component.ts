import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: '<h3>"{{name}}"</h3>'
})
export class TestComponent {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
  viewChildTest() {
    alert('wezooooo');
  }
}