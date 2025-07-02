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
import Input from '@/components/Input';
import Header from '@/components/Auth/Header';
import CustomBttn from '@/components/CustomBttn';
const Login = () => {
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
            <Header />
            <View className="w-full items-center">
                <Text className="text-2xl font-bold mb-5 dark:text-zinc-200 text-zinc-900">
                    Welcome Back
                </Text>
                <Input placeholderText="Email" value={email} setValue={setEmail} />
                <Input placeholderText="Password" value={password} setValue={setPassword} secureTextEntry />
                <View className="flex-row w-full gap-3">
                    <CustomBttn title="Login" onPress={submitHandler} pressableClassname='bg-orange-800 py-3 px-6 rounded-xl w-1/2 items-center' />
                    <CustomBttn title='Forgot Password' onPress={() => Alert.alert('Sorry', 'Forgot password coming soon!')} pressableClassname='border-2 border-red-400 py-3 px-6 rounded-xl w-1/2 items-center' textClassname='text-red-400 font-bold text-base' />
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
