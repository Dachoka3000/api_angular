import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: any;
  currentRecipe = null;
  currentIndex = -1;
  title = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.retrieveRecipes();
  }
  retrieveRecipes(): void {
    this.recipeService.getAll()
      .subscribe(
        data => {
          this.recipes= data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveRecipes();
    this.currentRecipe = null;
    this.currentIndex = -1;
  }
  setActiveRecipe(recipe, index): void {
    this.currentRecipe = recipe;
    this.currentIndex = index;
  }

}
