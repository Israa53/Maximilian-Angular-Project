import { Injectable } from '@angular/core';
import { ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: ingredient[] = [
    new ingredient('Apple', 5),
    new ingredient('Tomato', 7)
  ];
  constructor() { }
  getList() {
    return this.ingredients.slice();
  }
}
