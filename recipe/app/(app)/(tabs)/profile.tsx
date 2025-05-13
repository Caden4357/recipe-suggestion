import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from 'nativewind';
const Profile = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    return (
        <View className='flex-1 items-center dark:bg-zinc-900 bg-white '>
            <View className='bg-teal-600 w-full pt-16 rounded-3xl p-4 pb-20 flex-row justify-between'>
                <AntDesign name="back" size={24} color="black" className='bg-white p-4 rounded-2xl' />
                {
                    isDark ?
                    <Pressable onPress={toggleColorScheme}>
                        <Entypo name="light-bulb" size={24} color="black" className='bg-white p-4 rounded-2xl' />
                    </Pressable>
                    :
                    <Pressable onPress={toggleColorScheme}>
                        <MaterialIcons name="dark-mode" size={24} color="black" className='bg-white p-4 rounded-2xl' />
                    </Pressable>
                    
                }
            </View>
        </View>
    );
}

export default Profile;
