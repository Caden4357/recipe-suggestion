import { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

type Props = {
    title: string;
    onPress: () => void;
    pressableClassname?: string;
    textClassname?: string;
};

const CustomBttn = ({ title, onPress, pressableClassname, textClassname }: Props) => {
    return (
        <Pressable onPress={onPress} className={pressableClassname || "bg-orange-800 py-3 px-6 rounded-xl w-full items-center"}>
            <Text className={textClassname || "text-white font-bold text-base"}>{title}</Text>
        </Pressable>
    );
}

export default CustomBttn;