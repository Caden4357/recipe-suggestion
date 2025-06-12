import { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert, Pressable, Modal } from 'react-native';
import { getRandomRecipes } from '@/lib/recipes';
import { useRecipes } from '@/context/recipe';
import FoodItem from './FoodItem';
import { useColorScheme } from 'nativewind';
import Entypo from '@expo/vector-icons/Entypo';
import DietRestrictions from './DietRestrictions';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const data = [
    { key: '1', value: 'Gluten Free' },
    { key: '2', value: 'Vegetarian' },
    { key: '3', value: 'Vegan' },
];

const RecipeList = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const { recipes, setRecipes, loading, setLoading } = useRecipes();
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                setLoading(true);
                const data = await getRandomRecipes();
                setRecipes(data.recipes);
                setLoading(false);
            } catch (err) {
                Alert.alert('There was an issue fetching recipes');
                setLoading(false);
            }
        };

        getRecipes();

        return () => {
            setRecipes([]);
        };
    }, [setRecipes, setLoading]);

    if (loading) {
        return (
            <View className="mt-8 px-4">
                <Text className="text-2xl dark:text-zinc-200 text-zinc-900">Loading...</Text>
            </View>
        );
    }


    const openModal = () => {
        console.log('Modal opening');
    }

    return (
        <View className="mt-8 px-4">
            <DietRestrictions/>
            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FoodItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default RecipeList;
