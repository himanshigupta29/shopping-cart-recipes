import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { PleaseSelectRecipeComponent } from './recipes/please-select-recipe/please-select-recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { SignupComponent } from './auth/signup/signup.component';

import { SigninComponent } from './auth/signin/signin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGaurdService } from './auth/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'

  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
