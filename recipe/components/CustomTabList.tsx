import { TabTrigger } from 'expo-router/ui';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CustomTabList = () => {
    return (
        <View>
            <TabTrigger name='home' href={'/'}>
                <Text>Home</Text>
            </TabTrigger>
        </View>
    );
}
export default CustomTabList;