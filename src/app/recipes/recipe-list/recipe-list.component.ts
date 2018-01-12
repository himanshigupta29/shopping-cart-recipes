import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []

})
export class RecipeListComponent implements OnInit, OnChanges, OnDestroy {

  recipes: Recipe[];
  recipeChangedSubscription: Subscription;

  // @Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipesService,
    private router: Router,
    private route: ActivatedRoute) { }

  // onRecipeItemSelection(recipeData: Recipe) {
  //   this.recipeItemSelected.emit(recipeData);
  // }

  ngOnChanges() {
    //  console.log('11111111111 111111111111111111 ngOnChanges ');
  }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
    this.recipeChangedSubscription = this.recipeService.recipesChanged.subscribe((newRecipes: Recipe[]) => {
      this.recipes = newRecipes;
    });

  }

  addNewRecipe() {
    //  console.log('mmmmmmmmmmmmm', this.route);

    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngDoCheck() {

    //  console.log('cccccccccccccccccc ngDoCheck');

  }

  ngAfterContentInit() {
    //  console.log('AAAAAAAAAAAAAAAAAA ngAfterContentInit');
  }
  ngAfterContentChecked() {
    //  console.log('HHHHHHHHHHHH HHHHHHHHHHH ngAfterContentChecked');
  }

  ngAfterViewInit() {
    //  console.log('XXXXXXX XXXXXXX XXXXXXXXXXXXX ngAfterViewInit');
  }

  ngAfterViewChecked() {
    //  console.log('v v v v v  v v v v v vv ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.recipeChangedSubscription.unsubscribe();
  }
}
