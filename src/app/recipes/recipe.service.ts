import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Plain Dosa', 'plane and cryspy', 'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-310x310.jpg'),
        new Recipe('Uttapam', 'Melt in you mouth', 'https://drishtidarshan.com/wp-content/uploads/2021/01/south-indian-food-uttapam_55610-1814.jpg'),
        new Recipe('Upma', 'Soft and Delicious', 'https://cdn.cdnparenting.com/articles/2020/01/24145211/Broccoli-Suji-Upma-Soft-Recipe-696x476.jpg'),
      ];
        
    getRecipes() {
        return this.recipes.slice();
    }
}