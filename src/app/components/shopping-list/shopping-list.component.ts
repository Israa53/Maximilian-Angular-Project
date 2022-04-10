import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredient[] = [
  new ingredient('Apple', 5),
  new ingredient('Tomato', 7)
];
  constructor() { }

  ngOnInit(): void {
  }
  addedToList(data: ingredient) {
    console.log(data)
    this.ingredients.push(data)
    console.log(this.ingredients)
  }
}
