import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  recipe = {
    title: '',
    ingredients: '',
    method: ''
  };
  submitted = false;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  saveRecipe(): void {
    const data = {
      title: this.recipe.title,
      ingredients: this.recipe.ingredients,
      method: this.recipe.method
    };
    this.recipeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true
        },
        error => {
          console.log(error);
        });
  }

  newRecipe(): void {
    this.submitted = false;
    this.recipe = {
      title: '',
      ingredients: '',
      method: ''
    }
  }
}
