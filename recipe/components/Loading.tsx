import { View, Text } from 'react-native';
import { useColorScheme } from 'nativewind';

const Loading = () => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <View className="flex-1 justify-center items-center">
            <Text className={`text-3xl font-bold ${isDark ? 'text-zinc-200' : 'text-zinc-900'}`}>
                Loading...
            </Text>
        </View>
    );
};

export default Loading;
