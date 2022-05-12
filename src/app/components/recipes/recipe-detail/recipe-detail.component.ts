import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe!: Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
  })
}

}
