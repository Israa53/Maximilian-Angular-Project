import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
  }
  selectedRecipe() {
    this.recipeService.selectedRecipe.emit(this.recipe)
  }
}
