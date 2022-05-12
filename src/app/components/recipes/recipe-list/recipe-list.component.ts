import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers:[RecipesService]
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[] ;
constructor(private recipesService:RecipesService) { }
  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
