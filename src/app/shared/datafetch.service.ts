import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataFetchService {

  constructor(private http: Http,
    private recipeService: RecipesService,
    private authService: AuthService) { }

  fetchRecipes() {

    const token = this.authService.getToken();

    const url = 'https://ng-recipe-book-1499b.firebaseio.com/recipes.json?auth=' + token;

    return this.http.get(url)
      .subscribe(
      (response: Response) => {

        const data = response.json();
        this.recipeService.setRecipes(data);

      }
      );

  }

}
