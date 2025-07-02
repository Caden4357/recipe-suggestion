import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { getRecipe } from '@/lib/recipes';
import type { Recipe } from '@/constants/Types';
import RecipeCard from '@/components/RecipeCard';
import IngredientList from '@/components/IngredientList';

const CookRecipe = () => {
	const { id } = useLocalSearchParams() as { id: string };
	const navigation = useNavigation();
	const [recipe, setRecipe] = useState<Recipe | null>(null);

	useEffect(() => {
		navigation.setOptions({ headerTitle: 'Cook Recipe' });
		const fetchRecipe = async () => {
			try {
				const data = await getRecipe(id);
				setRecipe(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchRecipe();
	}, [navigation, id]);

	if (!recipe) return null;

	return (
		<SafeAreaView className="flex-1 bg-white dark:bg-zinc-900 px-4 pt-6">
			<RecipeCard recipe={recipe} />
			<IngredientList ingredients={recipe.extendedIngredients} />
		</SafeAreaView>
	);
};

export default CookRecipe;
