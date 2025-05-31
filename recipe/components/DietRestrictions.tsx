
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useColorScheme } from 'nativewind';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { MaterialIcons } from '@expo/vector-icons';

const data = [
    { key: '1', value: 'Gluten Free' },
    { key: '2', value: 'Vegetarian' },
    { key: '3', value: 'Vegan' },
];

const DietRestrictions = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheck = (val: string) => {
    }
    return (
        <View className='w-2/4 border-2 mx-auto justify-center h-2/4'>
            <Text className='dark:text-white text-xl font-bold'>Dietary Restrictions</Text>
            <View className='flex-row'>
                <MultipleSelectList
                    setSelected={setSelectedItems}
                    data={data}
                    save="value"
                    label="Dietary Restrictions"
                />
            </View>
        </View>
    );
}
export default DietRestrictions;