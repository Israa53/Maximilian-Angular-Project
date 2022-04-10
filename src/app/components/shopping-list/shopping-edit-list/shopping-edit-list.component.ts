import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit-list',
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.scss']
})
export class ShoppingEditListComponent implements OnInit {
@ViewChild('nameInput') nameInput!: ElementRef;
@ViewChild('amountInput') amountInput!: ElementRef;
@Output() ingrediantsAdded = new EventEmitter<ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
addItem(){
  // const nameAndAmount = new ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  // console.log(nameAndAmount)
  this.ingrediantsAdded.emit(new ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
}
}
