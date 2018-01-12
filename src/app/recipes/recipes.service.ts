import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Fried Chips', 'Testing chips dish description', 'assets/images/chips_1.jpg', [new Ingredient('tomatoes', '4'), new Ingredient('potatoes', '33')] ),
    new Recipe('Fried Creamy Chips ', 'Testing Creamy chips dish description', 'assets/images/chips_2.jpg', [new Ingredient('tomatoes', '33'), new Ingredient('potatoes', '33')] ),
    new Recipe('Chocolate Brownie', 'jkjk nmnm nm n jhjj h uiui', 'assets/images/brownie.jpg', [new Ingredient('Cream', '33'), new Ingredient('ice', '33')] ),
    new Recipe('Fruit Cake', 'kjkj sasas s sqw  wq wqioioio', 'assets/images/cake.jpg', [new Ingredient('cherry', '33'), new Ingredient('oranges', '33')] )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeItem(id) {

    return this.recipes[id];

  }

  addIngredientsToShoppingList( ingredients: Ingredient[] ) {

    this.shoppingListService.addIngredients(ingredients);

  }

  setRecipes( recipesData: Recipe[]) {

    this.recipes = recipesData;
    this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index: number) {


    console.log('lllllllllllllllll');

    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());

  }


  updateRecipe(index: number, newRecipe: Recipe) {


    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }

  addNewRecipe(newRecipe: Recipe) {

    const id = this.recipes.push (newRecipe);
    this.recipesChanged.next(this.recipes.slice());
    return id;

  }




}
