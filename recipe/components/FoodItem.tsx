import { Image, StyleSheet, Text, TouchableOpacity, View, Alert, Appearance } from 'react-native'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'
import type { Href } from 'expo-router'
import type { ColorScheme, Theme } from '@/constants/Types'
type Item = {
    id: string,
    title: string,
    image: string
}
type FoodItem = {
    item: Item
}

const FoodItem = ({ item }: FoodItem) => {
    // console.log('ITEM: ',item);
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);

    function viewRecipe(id: string) {
        if (!id) Alert.alert('something went wrong. Try again later');
        // navigate to view/cook recipe page next
        router.push(`/recipe/${id}` as Href);
    }
    return (
        <TouchableOpacity onPress={() => viewRecipe(item.id)}>
            <View style={styles.foodItemContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.image
                    }}
                />
                <Text style={styles.foodItemText}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default FoodItem
function createStyles(theme: Theme, colorScheme: ColorScheme) {
    return StyleSheet.create({
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

