import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UsersFavRecipesSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    recipeId: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const UsersFavRecipes = model("UsersFavRecipes", UsersFavRecipesSchema);
export default UsersFavRecipes;
