import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmout') ingredientAmout: ElementRef;

  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredients() {

  console.log('========');

    const ingredientName = this.ingredientName.nativeElement.value;
    const ingredientAmount = this.ingredientAmout.nativeElement.value;

    this.newIngredientAdded.emit(
      new Ingredient(ingredientName, ingredientAmount)
    );

    // this.ingredientName.nativeElement.value = '';
  }

}
