import { useState } from 'react';
import { View, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useColorScheme } from 'nativewind';

const Search = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <View className="flex-row justify-center w-full">
            <View
                className={`flex-row items-center w-4/5 px-3 py-2 rounded-2xl border ${isDark ? 'border-white' : 'border-black'
                    }`}
            >
                <AntDesign name="search1" size={24} color={isDark ? 'white' : 'black'} />
                <TextInput
                    placeholder="Search Ingredients"
                    placeholderTextColor={isDark ? '#E4E4E7' : '#111827'}
                    onChangeText={setSearch}
                    className={`ml-2 flex-1 ${isDark ? 'text-white' : 'text-black'}`}
                />
            </View>
        </View>
    );
};

export default Search;
