import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UsersFavRecipesSchema = new Schema({
    userId: {
        type: string,
        required: true
    },
    recipeId: {
        type: [string],
        required: true
    }
}, { timestamps: true });

const UsersFavRecipes = model("UsersFavRecipes", UsersFavRecipesSchema);
export default UsersFavRecipes;
