import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeItemElement') recipeitem: Recipe;

  @Input() recipeIndex;

  // @Output() recipeItemSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipesService) { }

  // selectRecipe() {
  //
  //   this.recipeService.recipeSelected.emit(this.recipeitem);
  //
  //   console.log('clicke........................');
  //
  //   // this.recipeItemSelected.emit();
  // }

  ngOnInit() {
  }

}
