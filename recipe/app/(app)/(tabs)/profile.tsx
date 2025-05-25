import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@/context/theme';
import { useSession } from '@/context/ctx';
import { getCurrentUser } from '@/util/auth';
const Profile = () => {
    const { signOut } = useSession();
    const { colorScheme, toggleColorScheme } = useTheme();
    const [username, setUsername] = useState<string | null | undefined>('')
    const [email, setEmail] = useState<string | null | undefined>('')
    const { session } = useSession();
    // console.log('SESSION: ', session);
    const isDark = colorScheme === 'dark';


    useEffect(() => {
        async function getUser() {
            const user = await getCurrentUser();
            if (user) {
                setUsername(user.displayName);
                setEmail(user.email);
            }
        }
        getUser()
    }, [])

    return (
        <View className='flex-1 items-center dark:bg-zinc-900 bg-white '>
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
            <Text className='dark:text-white text-xl mt-4'>{username}</Text>
            <Text className='dark:text-white text-xl mt-2 mb-10'>{email}</Text>
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
        </View>
    );
}

export default Profile;
