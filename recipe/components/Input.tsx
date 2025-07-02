import { useState } from 'react';
import { TextInput } from 'react-native';
import { useColorScheme } from 'nativewind';
type Props = {
    placeholderText?: string;
    value: string;
    setValue: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input = ({ placeholderText, value, setValue, secureTextEntry }: Props) => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';
    return (
        <TextInput
            placeholder={placeholderText}
            placeholderTextColor={isDark ? '#d4d4d8' : '#171717'}
            value={value}
            onChangeText={setValue}
            className="w-full mb-3 px-4 py-3 rounded-lg border dark:border-zinc-400 border-zinc-800 dark:text-white text-black"
        />
    );
}

export default Input;