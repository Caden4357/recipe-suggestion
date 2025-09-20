import UsersFavRecipes from "../models/users-fav-recipes.js";
import axios from "axios";
const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const SPOONACULAR_API_HOST = process.env.SPOONACULAR_API_HOST;
const SPOONACULAR_API_URL = process.env.SPOONACULAR_API_URL;


async function getRandomRecipe(req, res) {
    console.log('Fetching random recipe...');
    try {
        const response = await axios.get(`${SPOONACULAR_API_URL}/recipes/random?number=2`, {
            headers: {
                "X-RapidAPI-Key": SPOONACULAR_API_KEY,
                "X-RapidAPI-Host": SPOONACULAR_API_HOST
            }
        });
        // only return recipe name, image, id, summary, ingredients, and link
        const recipes = response.data.recipes.map(recipe => ({
            id: recipe.id,
            name: recipe.title,
            image: recipe.image,
            summary: recipe.summary,
            ingredients: recipe.extendedIngredients.map(ing => ing.name),
            link: recipe.sourceUrl
        }));
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching random recipe", error });
    }
};

async function addFavRecipe(req, res) {
    const { userId, recipeId } = req.body;
    try {
        // Check if the user already has a favorite recipes document
        let userFav = await UsersFavRecipes.findOne({ userId });
        if (userFav) {
            // If the document exists, update it
            userFav.recipeId.push(recipeId);
            await userFav.save();
            return res.status(200).json(userFav);
        }
        // If not, create a new document
        const newFavRecipe = await UsersFavRecipes.create({ userId, recipeId });
        res.status(201).json(newFavRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error adding favorite recipe", error });
    }
};

export { getRandomRecipe, addFavRecipe };