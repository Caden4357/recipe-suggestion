import { Image, Text, TouchableOpacity, View, Alert } from 'react-native';
import { router } from 'expo-router';
import type { Href } from 'expo-router';
import type { FoodItemType } from '@/constants/Types';
import { useColorScheme } from 'nativewind';

type FoodItemProps = {
    item: FoodItemType;
};

const FoodItem = ({ item }: FoodItemProps) => {
    const { colorScheme } = useColorScheme();
    const isDark = colorScheme === 'dark';

    const viewRecipe = (id: string) => {
        if (!id) {
            Alert.alert('Something went wrong. Try again later.');
            return;
        }
        router.push(`/recipe/${id}` as Href);
    };

    return (
        <TouchableOpacity onPress={() => viewRecipe(item.id)}>
            <View className="max-w-[220px] rounded-2xl m-1.5 items-center">
                <Image
                    source={{ uri: item.image }}
                    className={`w-48 h-48 rounded-2xl border p-2 ${isDark ? 'border-zinc-200' : 'border-zinc-800'
                        }`}
                    resizeMode="cover"
                />
                <Text className="mt-2 text-center text-base font-medium dark:text-zinc-200 text-zinc-900">
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default FoodItem;
