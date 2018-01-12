import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {


  constructor(private http: Http,
    private recipesService: RecipesService,
    private authService: AuthService) { }

  storeRecipes() {

    const token = this.authService.getToken();
    return this.http
      .put('https://ng-recipe-book-1499b.firebaseio.com/recipes.json?auth=' + token,
      this.recipesService.getRecipes());
  }

}
