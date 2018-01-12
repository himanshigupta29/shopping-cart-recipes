import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] ;
  constructor(private shoppinglistserv: ShoppingListService) { }

  private ingredientChangedSubscription: Subscription;

  ngOnInit() {

    this.ingredients = this.shoppinglistserv.getShoppingList();

    this.ingredientChangedSubscription = this.shoppinglistserv.ingredientChanged.subscribe( () => {

      console.log('subscribe called');

      this.ingredients = this.shoppinglistserv.getShoppingList();
    });
  }

  addNewIngredient(ingredientData : Ingredient ) {

    console.log(ingredientData.name);

  }

  ngOnDestroy() {
    this.ingredientChangedSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    console.log('================');
    this.shoppinglistserv.editingStarted.next(index);
  }

}
