
import { useState } from 'react';
import { View, Text } from 'react-native';
import { useColorScheme } from 'nativewind';
import { AdvancedCheckbox, CheckboxGroup } from 'react-native-advanced-checkbox';
const DietRestrictions = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    const [selectedValues, setSelectedValues] = useState<string[]>(['']);

    const handleCheckbox = (value:string[]) => {
        console.log('VALUE: ', value);
        setSelectedValues([...selectedValues, ...value]);
    }
    return (
        <View className='w-2/4 border-2 mx-auto justify-center h-3/4'>
            <Text className='dark:text-white text-xl font-bold'>Dietary Restrictions</Text>
            <View className='flex-row'>
                <CheckboxGroup onValueChange={handleCheckbox}>
                    <AdvancedCheckbox value="glutenFree" label="Gluten Free" checkedColor="#FF6347" />
                    <AdvancedCheckbox value="vegetarian" label="Vegetarian" checkedColor="#FF6347" />
                    <AdvancedCheckbox value="vegan" label="Vegan" checkedColor="#FF6347" />
                </CheckboxGroup>
            </View>
        </View>
    );
}
export default DietRestrictions;
