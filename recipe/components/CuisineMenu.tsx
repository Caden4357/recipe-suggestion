import { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { CuisinesList } from '@/constants/Cuisines';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRecipes } from '@/context/recipe';
import { getRandomRecipes } from '@/lib/recipes';
import { useColorScheme } from 'nativewind';

type Cuisines = {
    item: string;
};

const CuisineMenu = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const { setRecipes } = useRecipes();

    async function getCuisine(cuisine: string) {
        try {
            const data = await getRandomRecipes(cuisine.toLowerCase());
            setRecipes(data.recipes);
        } catch (error) {
            console.error(error);
        }
    }

    const Cuisine = ({ item }: Cuisines) => {
        return (
            <Pressable onPress={() => getCuisine(item)}>
                <View className="mt-5 items-center">
                    <View className="w-[70px] p-5 m-2.5 rounded-full bg-[#B52A01] items-center justify-center">
                        <FontAwesome6 name="bowl-food" size={24} color="#fff" />
                    </View>
                    <Text className="text-base dark:text-zinc-200 text-zinc-900">{item}</Text>
                </View>
            </Pressable>
        );
    };

    return (
        <View>
            <FlatList
                data={CuisinesList}
                renderItem={({ item }) => <Cuisine item={item} />}
                keyExtractor={(item) => item}
                horizontal={true}
            />
        </View>
    );
};

export default CuisineMenu;
