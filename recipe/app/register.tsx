import { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'nativewind';

import { authorizeUser } from '@/util/auth';
import { useSession } from '@/context/ctx';
import Input from '@/components/Input';
import Header from '@/components/Auth/Header';
import CustomBttn from '@/components/CustomBttn';

const Register = () => {
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
            <Header />
            <View className="w-full items-center">
                <Text className="text-2xl font-bold mb-5 dark:text-zinc-200 text-zinc-900">Register</Text>
                <Input placeholderText="Username" value={username} setValue={setUsername} />
                <Input placeholderText="Email" value={email} setValue={setEmail} />
                <Input placeholderText="Password" value={password} setValue={setPassword} secureTextEntry />
                <Input placeholderText="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />
                <CustomBttn title="Register" onPress={submitHandler} pressableClassname='bg-orange-800 py-3 px-6 rounded-xl w-1/2 items-center' />
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
