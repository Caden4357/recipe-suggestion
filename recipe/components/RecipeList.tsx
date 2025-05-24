import type { Href } from 'expo-router';
import type { ColorScheme, Theme } from '@/constants/Types';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Appearance, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '@/constants/Colors'
import { getRandomRecipes } from '@/lib/recipes'
import { useRecipes } from '@/context/recipe';
import FoodItem from './FoodItem';

const RecipeList = () => {
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const { recipes, setRecipes, loading, setLoading } = useRecipes();

    useEffect(() => {
        const getRecipes = async () => {
            try {
                setLoading(true);
                const data = await getRandomRecipes()
                setRecipes(data.recipes);
                setLoading(false)
            }
            catch (err) {
                Alert.alert('There was an issue fetching recipes')
                setLoading(false)
            }
        }
        getRecipes();

        return () =>{
            setRecipes([]);
        }
    }, [setRecipes, setLoading])

    if (loading) {
        return (
            <View>
                <Text style={styles.title}>Loading...</Text>
            </View>
        );
    }
    return (
        <View>
            <Text style={styles.title}>Popular Recipes</Text>
            <FlatList
                data={recipes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <FoodItem item={item} />}
                horizontal={true}
            />
        </View>
    )
}


export default RecipeList;

function createStyles(theme: Theme, colorScheme: ColorScheme) {
    return StyleSheet.create({
        title: {
            color: theme.text,
            fontSize: 24,
            marginTop: 30,
        },
        foodItemContainer: {
            maxWidth: 220,
            borderRadius: 20,
            margin: 6,
            alignItems: 'center'
        },
        foodItemText: {
            color: theme.text
        },
        image: {
            width: 200,
            height: 200,
            borderRadius: 20,
            borderColor: theme.text,
            borderWidth: 1,
            padding: 8,
        }
    })
}
