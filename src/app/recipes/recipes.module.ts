import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { PleaseSelectRecipeComponent } from './please-select-recipe/please-select-recipe.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { DropdownDirective } from '../shared/dropdown.directive';

import { RecipeRoutingModule } from './recipe-routing.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    PleaseSelectRecipeComponent,
    RecipeEditComponent,
    // DropdownDirective,

  ],
  imports: [ReactiveFormsModule,
    CommonModule,
    RecipeRoutingModule
  ]
})
export class RecipesModule {

}
