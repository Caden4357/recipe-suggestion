
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useColorScheme } from 'nativewind';
import AntDesign from '@expo/vector-icons/AntDesign';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons } from '@expo/vector-icons';
const items = [
    { name: 'Apples', id: 1 },
    { name: 'Oranges', id: 2 },
    { name: 'Pears', id: 3 },
];
const CustomIcon = () => {
    return <MaterialIcons/>;
};
const DietRestrictions = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    const handleCheck = (val: string) => {
    }
    return (
        <View className='w-2/4 border-2 mx-auto justify-center h-2/4'>
            <Text className='dark:text-white text-xl font-bold'>Dietary Restrictions</Text>
            <View className='flex-row'>
                <SectionedMultiSelect
                    items={items}
                    uniqueKey="id"
                    onSelectedItemsChange={setSelectedItems}
                    selectedItems={selectedItems}
                    IconRenderer={<CustomIcon/>} // Error here still 
                />
            </View>
        </View>
    );
}
export default DietRestrictions;