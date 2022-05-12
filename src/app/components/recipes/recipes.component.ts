import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
selectedRecipe!: Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    console.log(this.selectedRecipe)
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        console.log(this.selectedRecipe)

        this.selectedRecipe = recipe; 
        console.log(recipe)
      }
    );
  }
  // viewSelectedRecipeDetails(data: {}) {
  //   console.log(data);

  // }
}
