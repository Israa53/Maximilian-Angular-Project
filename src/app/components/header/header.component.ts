import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
collapse = true;
@Output() selectedValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(data: string){
    this.selectedValue.emit(data);
  }
}
