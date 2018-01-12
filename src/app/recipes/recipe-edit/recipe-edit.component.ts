import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipesService } from '../recipes.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log('params id', +params['id']);
      this.editMode = params['id'] !== undefined;
      console.log('this.editMode', this.editMode);
    });

    this.initForm();
  }

  private initForm() {

    let recipeName = '';
    let description = ''
    let imageUrl = '';
    let ingredientsList = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipeItem(this.id);
      recipeName = recipe.name;
      description = recipe.description;
      imageUrl = recipe.imagePath;

      if (recipe['ingredients']) {

        for (let ingredient of recipe['ingredients']) {

          ingredientsList.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(
                ingredient.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
              )
            })
          )
        }
      }


    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageUrl': new FormControl(imageUrl, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': ingredientsList
    });

  }



  onSubmit() {

    let newRecipe = this.recipeForm.value;

    const newRecipeInfo = new Recipe(
      newRecipe.name,
      newRecipe.description,
      newRecipe.imageUrl,
      newRecipe.ingredients
    );

    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, newRecipeInfo);
      this.onCancelEditRecipe();
    } else {
      const newId = this.recipesService.addNewRecipe(newRecipeInfo);
      this.router.navigate(['/recipes', newId - 1])

    }

  }

  onCancelEditRecipe() {

    // this.route.navigate('/recipes');
    console.log('cancel........');

    this.router.navigate(['../'], { relativeTo: this.route });

    //this.router.navigate(['/recipes', this.id]);

  }

  onAddIngredient() {

    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );

  }

  onRemoveIngredient(index: number) {

    // (this.recipeForm.get('ingredients')).value.splice(index, 1);

    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);

  }


  // onDeleteRecipe() {
  //   console.log('=============.................===============ppppppppppp');
  // }


}
