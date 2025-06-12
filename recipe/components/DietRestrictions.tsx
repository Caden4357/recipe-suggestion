
import { useState } from 'react';
import { Alert, View, Text, Pressable, StyleSheet, Button, Modal } from 'react-native';
import { useColorScheme } from 'nativewind';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { MaterialIcons } from '@expo/vector-icons';
import { getRecipesByDiet } from '@/lib/recipes';
import { useRecipes } from '@/context/recipe';

const data = [
    { key: '1', value: 'Gluten Free' },
    { key: '2', value: 'Vegetarian' },
    { key: '3', value: 'Vegan' },
    { key: '4', value: 'Ketogenic' },
    { key: '5', value: 'Pescetarian' },
    { key: '6', value: 'Paleo' },
    { key: '7', value: 'Primal' },
    { key: '8', value: 'Whole30' },
    { key: '9', value: 'Dairy Free' },
    { key: '10', value: 'Low FODMAP' },
    { key: '11', value: 'Lacto-Vegetarian' },
    { key: '12', value: 'Ovo-Vegetarian' }
];

const DietRestrictions = () => {
    const { recipes, setRecipes, loading, setLoading } = useRecipes();
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const filterByDiet = async () => {
        try {
            setLoading(true);
            const data = await getRecipesByDiet(...selectedItems);
            setRecipes(data.recipes);
            setModalVisible(false);
            setLoading(false);
        } catch (err) {
            Alert.alert('There was an issue fetching recipes');
            setLoading(false);
        }
    }

    return (
        <>
            <Button title="Filter Recipes" onPress={() => setModalVisible(true)} />
            {/* check if this view is even needed at this point */}
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType='slide'
            >
                <MultipleSelectList
                    setSelected={setSelectedItems}
                    data={data}
                    save="value"
                    placeholder='Dietary Restrictions'
                    label="Dietary Restrictions"
                    closeicon={<Button title='Filter' onPress={() => filterByDiet()} />}
                    dropdownStyles={{
                        backgroundColor: isDark ? '#1f2937' : '#f3f4f6'
                    }}
                    boxStyles={{
                        backgroundColor: isDark ? '#1f2937' : '#f3f4f6',
                        borderColor: isDark ? '#4b5563' : '#d1d5db',
                        borderWidth: 1,
                        borderRadius: 8,
                        paddingHorizontal: 10,
                    }}
                    inputStyles={{
                        color: isDark ? 'white' : 'black',
                        fontSize: 16,
                    }}
                    dropdownTextStyles={{ color: isDark ? 'white' : 'black' }}
                />
            </Modal>
        </>
    );
}
export default DietRestrictions;