import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';

import { authorizeUser } from '@/util/auth';
import { useSession } from '@/context/ctx';

const Register = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const { signIn } = useSession();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = async () => {
        if (username.length < 3) {
            Alert.alert('Username too short', 'Username must be at least 3 characters long');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Password Mismatch', 'Passwords do not match');
            return;
        }

        try {
            const result = await authorizeUser(email, password, username);
            if (result?.token) {
                signIn(result.token);
                router.replace('/');
            }
        } catch (err) {
            Alert.alert('Authentication failed', 'Couldn’t register — check your credentials and try again');
        }
    };

    return (
        <View className="flex-1 items-center pt-12 dark:bg-zinc-900 bg-white px-4">
            <StatusBar style="auto" />
            <Text className="text-3xl font-bold dark:text-zinc-200 text-zinc-900 mb-4">
                <MaterialCommunityIcons name="chef-hat" size={32} color={isDark ? 'white' : 'black'} /> SmartChef
            </Text>

            <View className="w-full items-center">
                <Text className="text-2xl font-bold mb-5 dark:text-zinc-200 text-zinc-900">Register</Text>

                <TextInput
                    placeholder="Username"
                    placeholderTextColor={isDark ? '#d4d4d8' : '#171717'}
                    value={username}
                    onChangeText={setUsername}
                    className="w-full mb-3 px-4 py-3 rounded-lg border dark:border-zinc-400 border-zinc-800 dark:text-white text-black"
                />
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
                    className="w-full mb-3 px-4 py-3 rounded-lg border dark:border-zinc-400 border-zinc-800 dark:text-white text-black"
                />
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={isDark ? '#d4d4d8' : '#171717'}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    className="w-full mb-6 px-4 py-3 rounded-lg border dark:border-zinc-400 border-zinc-800 dark:text-white text-black"
                />

                <Pressable
                    onPress={submitHandler}
                    className="bg-orange-800 py-3 px-6 rounded-xl w-1/2 items-center"
                >
                    <Text className="text-white font-bold text-base">Register</Text>
                </Pressable>
            </View>

            <Text className="mt-4 dark:text-zinc-300 text-zinc-700">
                Already have an account?{' '}
                <Link href="/" className="text-orange-600 underline">
                    Login here
                </Link>
            </Text>
        </View>
    );
};

export default Register;
