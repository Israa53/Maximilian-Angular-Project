import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedDetails = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Israa Abdellatef', 'Front end developer', 'https://static01.nyt.com/images/2021/03/28/dining/mc-shakshuka/mc-shakshuka-articleLarge.jpg'),
    new Recipe('Renad Mohamed', 'Back end developer', 'https://www.modernhoney.com/wp-content/uploads/2018/03/The-Best-Chicken-Marinade-Recipe-1024x730.jpg')
  ];
constructor() { }
  ngOnInit(): void {
  }
  onRecipeSelected(data: Recipe){
    console.log(data)
    this.recipeSelectedDetails.emit(data);
  }
}
