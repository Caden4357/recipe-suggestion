import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useColorScheme } from 'nativewind';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

const Header = () => {
        const { colorScheme, toggleColorScheme } = useColorScheme();
        const isDark = colorScheme === 'dark';
    return (
        <>

            <View className='w-full pt-16 p-4 pb-14 flex-row justify-between'>
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
            <Entypo name="user" size={62} color="black" className='bg-white p-4 rounded-full border-2' />
        </>
    );
}

const styles = StyleSheet.create({})
export default Header;