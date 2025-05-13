import type { Href } from 'expo-router';
import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, router } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';

import { loginUser } from '@/util/auth';
import { useSession } from '@/context/ctx';

const Login = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async () => {
        try {
            const result = await loginUser(email, password);
            if (result?.token) {
                signIn(result.token);
                router.replace('/' as Href);
            }
        } catch (err) {
            Alert.alert(
                'Authentication failed',
                'Couldn’t register — check your credentials and try again'
            );
        }
    };

    return (
        <View className="flex-1 items-center pt-12 px-4 dark:bg-zinc-900 bg-white">
            <StatusBar style="auto" />
            <TouchableOpacity onPress={toggleColorScheme} className="mb-2">
                <Text className="text-sm text-zinc-700 dark:text-zinc-300">
                    Change theme to {isDark ? 'Light' : 'Dark'}
                </Text>
            </TouchableOpacity>

            <Text className="text-3xl font-bold mb-4 dark:text-zinc-200 text-zinc-900">
                <MaterialCommunityIcons
                    name="chef-hat"
                    size={32}
                    color={isDark ? 'white' : 'black'}
                />{' '}
                SmartChef
            </Text>

            <View className="w-full items-center">
                <Text className="text-2xl font-bold mb-5 dark:text-zinc-200 text-zinc-900">
                    Welcome Back
                </Text>

                <TextInput
                    placeholder="Email"
                    placeholderTextColor={isDark ? '#d4d4d8' : '#171717'}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    className="w-full mb-3 px-4 py-3 rounded-lg border dark:border-zinc-400 border-zinc-800 dark:text-white text-black"
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor={isDark ? '#d4d4d8' : '#171717'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="w-full mb-6 px-4 py-3 rounded-lg border dark:border-zinc-400 border-zinc-800 dark:text-white text-black"
                />

                <View className="flex-row w-full gap-3">
                    <Pressable
                        onPress={submitHandler}
                        className="bg-orange-800 py-3 px-6 rounded-xl w-1/2 items-center"
                    >
                        <Text className="text-white font-bold text-base">Login</Text>
                    </Pressable>

                    <Pressable
                        onPress={() =>
                            Alert.alert('Sorry', 'Forgot password coming soon!')
                        }
                        className="border-2 border-red-400 py-3 px-6 rounded-xl w-1/2 items-center"
                    >
                        <Text className="text-red-400 font-bold text-base">
                            Forgot Password
                        </Text>
                    </Pressable>
                </View>
            </View>

            <Text className="mt-4 dark:text-zinc-300 text-zinc-700">
                Don’t have an account?{' '}
                <Link href="/register" className="text-orange-600 underline">
                    Register here
                </Link>
            </Text>
        </View>
    );
};

export default Login;
