import { FlatList, Text, View } from 'react-native';
import type { ExtendedIngredient } from '@/constants/Types';
import * as Crypto from 'expo-crypto'
type Props = {
    ingredients: ExtendedIngredient[];
};

const IngredientList = ({ ingredients }: Props) => {
    console.log(ingredients);
    return (
        <FlatList
            data={ingredients}
            keyExtractor={(item) => `${item.id}-${item.name}${Crypto.randomUUID()}`}
            renderItem={({ item }) => (
                <Text className="text-base text-zinc-800 dark:text-zinc-200 mb-3">
                    - {item.original}
                </Text>
            )}
            ListFooterComponent={() => <View className="mb-5" />}
        />
    );
};

export default IngredientList;
