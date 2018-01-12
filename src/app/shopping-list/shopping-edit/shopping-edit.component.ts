import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('ingredientName') ingredientName: ElementRef;
  // @ViewChild('ingredientAmout') ingredientAmout: ElementRef;

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('f') ngredientsForm: NgForm;

  editingStartedSubscription: Subscription;

  editMode = false;

  editedItemIndex: number;

  editedIngredient: Ingredient;

  constructor(private shoppinlistService: ShoppingListService) { }

  ngOnInit() {
    this.editingStartedSubscription = this.shoppinlistService.editingStarted
    .subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedIngredient = this.shoppinlistService.getIngredient(index);

      this.ngredientsForm.setValue({
        name: this.editedIngredient.name,
        amount: this.editedIngredient.amount
      });

    });
  }

  onSubmit() {

  const ingredientName =  this.ngredientsForm.value.name;
  const ingredientAmount =  this.ngredientsForm.value.amount;

  if(!this.editMode) {
    this.shoppinlistService.addNewIngredient(new Ingredient(ingredientName, ingredientAmount));
  } else {
    let newIngredient = {
      name: ingredientName,
      amount: ingredientAmount
    }
    this.shoppinlistService.updateIngredient(this.ngredientsForm.value, this.editedItemIndex);
    this.editMode = false;
  }

  this.ngredientsForm.reset();

    // const ingredientName = this.ingredientName.nativeElement.value;
    // const ingredientAmount = this.ingredientAmout.nativeElement.value;
    // this.shoppinlistService.addNewIngredient(new Ingredient(ingredientName, ingredientAmount));

  }

  clearAddIngredientsForm() {
    this.editMode = false;
    this.ngredientsForm.reset();
  }

  ngOnDestroy() {
    this.editingStartedSubscription.unsubscribe();
  }

  onDeleteIngredient() {

    if(this.editMode){
      this.shoppinlistService.deleteIngredient(this.editedItemIndex);
      this.clearAddIngredientsForm();
    }

  }

}
