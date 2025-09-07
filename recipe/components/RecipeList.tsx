import { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert, Pressable, Modal } from 'react-native';
import { getRandomRecipes } from '@/lib/recipes';
import { useRecipes } from '@/context/recipe';
import FoodItem from './FoodItem';
import { useColorScheme } from 'nativewind';
import Entypo from '@expo/vector-icons/Entypo';
import DietRestrictions from './DietRestrictions';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import Loading from './Loading';

const RecipeList = () => {
    const { recipes, setRecipes, loading, setLoading } = useRecipes();

    useEffect(() => {
        const getRecipes = async () => {
            try {
                setLoading(true);
                const data = await getRandomRecipes();
                setRecipes(data.recipes);
                console.log(data.recipes[0]);
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
        console.log();
        return (
            <Loading/>
        );
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
