import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AppRoutingModule } from './app-routing.module';

import { SignupComponent } from './auth/signup/signup.component';

import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/datastorage.service';
import { DataFetchService } from './shared/datafetch.service';
import { SigninComponent } from './auth/signin/signin.component';

import { AuthService } from './auth/auth.service';
import { AuthGaurdService } from './auth/auth-gaurd.service';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SignupComponent,
    SigninComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RecipesModule,

  ],
  providers: [
    ShoppingListService,
    DataStorageService,
    RecipesService,
    DataFetchService,
    AuthService,
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
