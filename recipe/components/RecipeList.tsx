import { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert, Pressable, Modal } from 'react-native';
import { getRandomRecipes } from '@/lib/recipes';
import { useRecipes } from '@/context/recipe';
import FoodItem from './FoodItem';
import { useColorScheme } from 'nativewind';
import Entypo from '@expo/vector-icons/Entypo';
import DietRestrictions from './DietRestrictions';

const RecipeList = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [modalVisible, setModalVisible] = useState(false);
    const { recipes, setRecipes, loading, setLoading } = useRecipes();

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
            <View className='flex-row items-center justify-between'>
                <Text className="text-2xl font-bold mb-4 dark:text-zinc-200 text-zinc-900">Popular Recipes</Text>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Entypo name="menu" size={24} color="orange" />
                </Pressable>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                    <DietRestrictions/>
                    <Pressable onPress={() => setModalVisible(false)}>
                        <Text>Done</Text>
                    </Pressable>
            </Modal>
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
