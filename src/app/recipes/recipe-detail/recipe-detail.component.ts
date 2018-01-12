import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

// import { RecipesService } from '../recipes.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

 detailedRecipeItem: Recipe;
 id: number;

  constructor( private recipesService: RecipesService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {

    var index = this.route.snapshot.params['id'];

    // this.detailedRecipeItem = this.recipesService.getRecipeItem(+index);

    this.route.params.subscribe((params: Params) => {
      this.id = this.route.snapshot.params['id'];
      this.detailedRecipeItem = this.recipesService.getRecipeItem(+params['id']);
    });

  }

  onAddToShoppingList() {

    this.recipesService.addIngredientsToShoppingList(this.detailedRecipeItem.ingredients);
    // this.shoppingListservice.addIngredientsToShoppingList(this.detailedRecipeItem.ingredients)
  }

  onEditRecipe() {
    console.log('hiiiiiiiiii');

    this.router.navigate(['edit'], {relativeTo: this.route});

  }


  onDeleteRecipe() {
    console.log('============================ppppppppppp');

    this.recipesService.deleteRecipe(this.id);

    this.router.navigate(['/recipes'])
  }

}
