import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RecipesComponent } from './recipes.component';
import { PleaseSelectRecipeComponent } from './please-select-recipe/please-select-recipe.component';

import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

import { AuthGaurdService } from '../auth/auth-gaurd.service';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: PleaseSelectRecipeComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent,
        canActivate: [AuthGaurdService]
      },
      {
        path: ':id',
        component: RecipeDetailComponent
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        canActivate: [AuthGaurdService]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {

}
