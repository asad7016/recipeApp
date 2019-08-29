import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This a simple Test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg'),
    new Recipe('A Test Recipe','This a simple Test','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
