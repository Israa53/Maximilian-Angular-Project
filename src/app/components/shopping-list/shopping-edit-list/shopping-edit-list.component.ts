import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit-list',
  templateUrl: './shopping-edit-list.component.html',
  styleUrls: ['./shopping-edit-list.component.scss']
})
export class ShoppingEditListComponent implements OnInit {
@ViewChild('nameInput') nameInput!: ElementRef;
@ViewChild('amountInput') amountInput!: ElementRef;
// @Output() ingrediantsAdded = new EventEmitter<ingredient>();
  constructor(private shoppinglist:ShoppingListService) { }

  ngOnInit(): void {
  }
addItem(){
  const newIngredient = new ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  this.shoppinglist.addIngredient(newIngredient);
  // console.log(nameAndAmount)
  // this.ingrediantsAdded.emit(new ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
}
}
