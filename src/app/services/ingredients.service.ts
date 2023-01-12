import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Ingredient } from './interface/ingredient.model';

const BACKEND_URL = environment.apiUrl + "/ingredients/";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private ingredients: Ingredient[] = [];
 //private ingredientdsUpdated = new Subject<{ ingredients: Ingredient[]; postCount: number }>();

  constructor(private http: HttpClient, private router: Router) {}

  addIngredient(title: string, items: string, amount: string, unit: string,) {
    const ingredientData = new FormData();
    ingredientData.append("title", title);
    ingredientData.append("items", items);
    ingredientData.append("amount",amount);
    ingredientData.append("content", unit);
    this.http
      .post<{ message: string; ingredient: Ingredient }>(
        BACKEND_URL,
        ingredientData
      )
      .subscribe(responseData => {
        this.router.navigate(["/tap"]);
      });
  }

}
