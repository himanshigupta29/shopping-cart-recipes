import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  // detailedRecipeItem: Recipe = new Recipe('Fried Chips',
  // 'Testing chips dish description', 'assets/images/chips_1.jpg');


  ngOnInit() {
  }

  // onRecipeItemSelection(recipeData: Recipe) {
  //
  //   this.detailedRecipeItem = recipeData;
  //   console.log('event fired ...RECIPE.....', JSON.stringify(recipeData));
  //
  // }

}
