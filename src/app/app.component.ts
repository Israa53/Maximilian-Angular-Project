import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  selected:boolean = true;
  hideShow(selected: string) {
    selected === 'recipe' ? this.selected = true : this.selected = false;
  }
}
