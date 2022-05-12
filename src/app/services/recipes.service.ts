import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Israa Abdellatef', 'Front end developer', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('Renad Mohamed', 'Back end developer', 'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg')
  ];
  constructor() { }
  getRecipes() {
    return this.recipes.slice();
  }

}
