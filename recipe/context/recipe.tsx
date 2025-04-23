import { useContext, createContext, type PropsWithChildren, useState } from 'react';
// vegetarian:false
// vegan:false
// glutenFree:true
// dairyFree:true
// veryHealthy:false
// cheap:false
// veryPopular:false
// sustainable:false
// weightWatcherSmartPoints:4
// gaps:"no"
// lowFodmap:false
// ketogenic:false
// whole30:false
// servings:8
// preparationMinutes:5
// cookingMinutes:10
// sourceUrl:"http://www.dizzybusyandhungry.com/ramen-noodle-coleslaw/"
// spoonacularSourceUrl:"https://spoonacular.com/ramen-noodle-coleslaw-556177"
// aggregateLikes:221
// creditText:"Dizzy Busy and Hungry"
// sourceName:"Dizzy Busy and Hungry"
// extendedIngredients:
// id:556177
// title:"Ramen Noodle Coleslaw"
// readyInMinutes:15
// image:"https://spoonacular.com/recipeImages/Ramen-Noodle-Coleslaw-556177.jpg"
// imageType:"jpg"
// instructions:"Toast the sesame seeds, about 350 degrees in the oven for about 10-15 minutes. Keep an eye on them to make sure they don't burn.Mix together the following to make the dressing: olive oil, vinegar, sugar, salt, pepper, green onions, chicken flavor packet from the ramen noodle package.Crush the ramen noodles until there are no large chunks (small chunks are OK).Combine the shredded cabbage and ramen noodles in a large bowl.Pour the dressing on the cabbage/noodle mixture and toss to coat.Top with the toasted sesame seeds and almonds."

import type { Recipe } from '@/constants/Types';


const RecipeContext = createContext<{
    recipes: Recipe[],
    setRecipes: (recipes: Recipe[]) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void
}>({
    recipes: [],
    setRecipes: (recipes) => null,
    loading: false,
    setLoading: (loading) => null
});


export function useRecipes() {
    const value = useContext(RecipeContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useRecipes must be wrapped in a <RecipeProvider />');
        }
    }
    return value;
}

export function RecipeProvider({ children }: PropsWithChildren) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                setRecipes,
                loading,
                setLoading
            }}>
            {children}
        </RecipeContext.Provider>
    );
}