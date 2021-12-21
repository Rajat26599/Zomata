import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Plain Dosa', 
            'plane and cryspy', 
            'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-310x310.jpg',
            [
                new Ingredient('Granulated wheat', 1),
                new Ingredient('Sambhar', 1)
            ]),
        new Recipe('Uttapam', 
            'Melt in you mouth', 
            'https://drishtidarshan.com/wp-content/uploads/2021/01/south-indian-food-uttapam_55610-1814.jpg',
            [
                new Ingredient('Granulated wheat', 1)
            ]),
        new Recipe('Upma', 
            'Soft and Delicious', 
            'https://cdn.cdnparenting.com/articles/2020/01/24145211/Broccoli-Suji-Upma-Soft-Recipe-696x476.jpg',
            [
                new Ingredient('Granulated wheat', 1),
                new Ingredient('Couliflower', 1)
            ]),
      ];

    constructor(private slService: ShoppingListService) {}
        
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngrediensToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}