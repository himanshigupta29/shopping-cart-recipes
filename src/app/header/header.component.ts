import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/datastorage.service';
import { DataFetchService } from '../shared/datafetch.service';

import { RecipesService } from '../recipes/recipes.service'
import { AuthService } from '../auth/auth.service';

import { ActivatedRoute, Params } from '@angular/router'

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent implements OnInit, OnDestroy {

  id: number;
  recipeParamsSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
    private dataFetchService: DataFetchService,
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  // @Output() NavigationChanged = new EventEmitter<string>();
  //
  // navigateTo(clickedItem : string) {
  //
  //   this.NavigationChanged.emit(clickedItem);
  //
  // }

  ngOnInit() {
    this.recipeParamsSubscription = this.route.params
      .subscribe((params: Params) => {

        console.log('============');
      });
  }

  onSaveRecipes() {
    console.log('======= save =========');
    this.dataStorageService.storeRecipes()
      .subscribe((response: Response) => {
        console.log('response ', response);
      });
  }

  onFetchRecipes() {
    this.dataFetchService.fetchRecipes();
  }

  ngOnDestroy() {
    this.recipeParamsSubscription.unsubscribe();
  }

  onLogout() {
    console.log('logg out');
    this.authService.signOut();

  }

}
