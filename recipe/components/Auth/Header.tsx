import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';
const Header = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <Text className="text-3xl font-bold dark:text-zinc-200 text-zinc-900 mb-4">
            <MaterialCommunityIcons name="chef-hat" size={32} color={isDark ? 'white' : 'black'} /> SmartChef
        </Text>
    );
};

export default Header;