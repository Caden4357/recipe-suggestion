import * as RecipeController from "../controllers/recipes-controller.js";
import { Router } from "express";
const router = Router();

router.get("/random", RecipeController.getRandomRecipe);
router.post("/favorites", RecipeController.addFavRecipe);

export default router;