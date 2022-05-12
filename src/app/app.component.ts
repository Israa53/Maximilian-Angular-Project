import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TestService]
})
export class AppComponent {
  constructor(private version:TestService){
    this.version.versionAnnounced$.subscribe(
data => {
  console.log(data)
}

    )
  }
  selected:boolean = true;
  hideShow(selected: string) {
    selected === 'recipe' ? this.selected = true : this.selected = false;
  }
  names = ['Dr IQ', '   ', '  Bombasto  '];

}
