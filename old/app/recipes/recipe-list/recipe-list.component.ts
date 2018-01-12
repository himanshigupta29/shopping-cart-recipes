import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Fried Chips', 'Testing chips dish description', 'assets/images/chips_1.jpg'),
    new Recipe('Fried Creamy Chips ', 'Testing Creamy chips dish description', 'assets/images/chips_2.jpg'),
    new Recipe('Chocolate Brownie', 'jkjk nmnm nm n jhjj h uiui', 'assets/images/brownie.jpg'),
    new Recipe('Fruit Cake', 'kjkj sasas s sqw  wq wqioioio', 'assets/images/cake.jpg')

  ];

  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor() { }

  onRecipeItemSelection(recipeData: Recipe) {
    this.recipeItemSelected.emit(recipeData);
  }

  ngOnInit() {
  }

}
