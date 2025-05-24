import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Search from '@/components/Search';
import CuisineMenu from '@/components/CuisineMenu';
import RecipeList from '@/components/RecipeList';
export default function Index() {
    return (
        <View className='flex-1 dark:bg-zinc-900 bg-white pt-12 p-3'>
            <StatusBar style='light' />
            <Search />
            <CuisineMenu/>
            <RecipeList/>
        </View>
    );
}
