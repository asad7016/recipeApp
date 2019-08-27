import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This a simple Test','https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwi1u7uM_6LkAhWIQI8KHVh_D00QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.hellofresh.co.uk%2Frecipes%2F&psig=AOvVaw0TLmztj--FgljUgSRMJqI0&ust=1566993302411269')
  ];

  constructor() { }

  ngOnInit() {
  }

}
