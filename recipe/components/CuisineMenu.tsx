import { useContext, useState } from 'react';
import { View, Text, FlatList, Appearance, StyleSheet, Pressable, Alert } from 'react-native';
import { CuisinesList } from '@/constants/Cuisines'
import { Colors } from '@/constants/Colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import type { ColorScheme, Theme } from '@/constants/Types';
import { useRecipes } from '@/context/recipe';
import { getRandomRecipes } from '@/lib/recipes';
type Cuisines = {
    item: string
}

const CuisineMenu = () => {
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const [cuisines, setCuisines] = useState<string[]>([])
    const {recipes, setRecipes } = useRecipes();



    async function getCuisine(cuisine: string){
        try{
            const data = await getRandomRecipes(cuisine.toLowerCase());
            setRecipes(data.recipes)
        } catch (error){
            console.error(error)
        }
    }

    const Cuisine = ({ item }: Cuisines) => {
        return (
            <Pressable onPress={() => getCuisine(item)}>
                <View style={styles.list}>
                    <View style={styles.listImage}><FontAwesome6 name="bowl-food" size={24} /></View>
                    <Text style={styles.listText}>{item}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <View>
            <FlatList
                data={CuisinesList}
                renderItem={({ item }) => <Cuisine item={item} />}
                keyExtractor={item => item}
                horizontal={true}
            />
        </View>
    )
}

export default CuisineMenu;

function createStyles(theme:Theme, colorScheme: ColorScheme) {
    return StyleSheet.create({
        list: {
            marginTop: 20,
            alignItems: 'center'
        },
        listImage: {
            backgroundColor: Colors.persimmon800,
            width: 70,
            padding: 20,
            margin: 10,
            borderRadius: 50,
            alignItems: 'center'
        },
        listText: {
            color: theme.text
        }
    })
}