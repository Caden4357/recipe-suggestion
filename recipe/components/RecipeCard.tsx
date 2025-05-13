import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import type { Recipe } from '@/constants/Types';
import type { Href } from 'expo-router';
type Props = {
    recipe: Recipe;
};

const RecipeCard = ({ recipe }: Props) => {
    return (
        <View className="items-center mb-6">
            {recipe.image && (
                <Image
                    source={{ uri: recipe.image }}
                    className="w-48 h-48 rounded-lg mb-4"
                    resizeMode="cover"
                />
            )}
            <Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-200 text-center mb-2">
                Cook {recipe.title}
            </Text>
            {recipe.instructions && (
                <Text className="text-base text-zinc-700 dark:text-zinc-300 text-center">
                    <Link href={recipe.sourceUrl as Href} className="text-orange-600 underline">
                        Click here to see the recipe
                    </Link>
                </Text>
            )}
        </View>
    );
};

export default RecipeCard;
