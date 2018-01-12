import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  // ingredientChanged = new EventEmitter<void>();

  ingredientChanged = new Subject<void>();
  editingStarted = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', '4'),
    new Ingredient('tomatoes', '14'),
    new Ingredient('oranges', '14')
  ];

  getShoppingList(){
    return this.ingredients.slice();
  }

  addNewIngredient(ingredientData: Ingredient) {
    this.ingredients.push(
      ingredientData
    );

    this.ingredientChanged.next();

  }

  addIngredients(ingredients: Ingredient[]) {

    //emit event on every push
    // for(let ingredient of ingredients){
    //   this.addNewIngredient(ingredient);
    // }


    // this.ingredients = this.ingredients.concat(newIngredients);
    //
    // console.log(this.ingredients.length);
    // this.ingredientChanged.emit();

    // ES6 Spread operator
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next();

  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(newIngredient, index) {
    this.ingredients[index] = new Ingredient(newIngredient.name, newIngredient.amount);
    this.ingredientChanged.next();

  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next();
  }

}
