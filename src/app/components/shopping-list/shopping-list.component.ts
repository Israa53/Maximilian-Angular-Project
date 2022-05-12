import { Component, OnInit } from '@angular/core';
import { ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
ingredients: ingredient[];
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getList();
  }
  addedToList(data: ingredient) {
    console.log(data)
    this.ingredients.push(data)
    console.log(this.ingredients)
  }
}
