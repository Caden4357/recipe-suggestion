import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useSession } from '@/context/ctx';

const ProfileMenu = () => {
    
    const { session, signOut } = useSession();

    return (
        <>
            <View className='flex-row justify-between w-3/4'>
                <View className='flex-row gap-8'>
                    <MaterialIcons name="emoji-food-beverage" size={24} color="orange" />
                    <Text className='dark:text-white text-2xl font-bold'>Favorite Recipes</Text>
                </View>
                <Pressable>
                    <AntDesign name="arrowright" size={24} color="orange" />
                </Pressable>
            </View>
            <View className='flex-row justify-between w-3/4 mt-8'>
                <View className='flex-row gap-8'>
                    <AntDesign name="profile" size={24} color="orange" />
                    <Text className='dark:text-white text-2xl font-bold'>Customize Profile</Text>
                </View>
                <Pressable>
                    <AntDesign name="arrowright" size={24} color="orange" />
                </Pressable>
            </View>
            <View className='flex-row justify-between w-3/4 mt-8'>
                <View className='flex-row gap-8'>
                    <AntDesign name="setting" size={24} color="orange" />
                    <Text className='dark:text-white text-2xl font-bold'>Settings</Text>
                </View>
                <Pressable>
                    <AntDesign name="arrowright" size={24} color="orange" />
                </Pressable>
            </View>
            <View className='flex-row justify-between w-3/4 mt-8'>
                <View className='flex-row gap-8'>
                    <MaterialIcons name="logout" size={24} color="orange" />
                    <Text className='dark:text-white text-2xl font-bold'>Sign Out</Text>
                </View>
                <Pressable onPress={signOut}>
                    <AntDesign name="arrowright" size={24} color="orange" />
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({})
export default ProfileMenu;