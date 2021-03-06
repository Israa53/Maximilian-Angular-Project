import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() selected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  selectedRecipe() {
    this.selected.emit(this.recipe);
  }
}
