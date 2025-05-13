import { FlatList, Text, View } from 'react-native';
import type { ExtendedIngredient } from '@/constants/Types';

type Props = {
    ingredients: ExtendedIngredient[];
};

const IngredientList = ({ ingredients }: Props) => {
    return (
        <FlatList
            data={ingredients}
            keyExtractor={(item) => `${item.id}-${item.name}`}
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
