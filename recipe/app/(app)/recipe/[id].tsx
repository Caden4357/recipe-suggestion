import type { ColorScheme, ExtendedIngredient, Theme } from "@/constants/Types";
import type { Recipe } from "@/constants/Types";

import { useEffect, useState, useContext } from "react";
import {
	StyleSheet,
	View,
	Text,
	Appearance,
	Image,
	ScrollView,
	FlatList,
} from "react-native";
import { Href, Link, useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import { getRecipe } from "@/lib/recipes";
import RenderHtml from "react-native-render-html";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from 'react-native';

const tagStyles = {
	p: {
		color: 'red',
	},
	li:{
		color: 'blue',
	},
	ol:{
		color: 'green',
	},
	ul:{
		color: 'white',
	},
	// body: {
	// 	color: "yellow",
	// },
};

type Ingredients = {
	item: ExtendedIngredient;
};

const CookRecipe = () => {
	const { width } = useWindowDimensions();
	const colorScheme = Appearance.getColorScheme() ?? "dark";
	const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
	const styles = createStyles(theme, colorScheme);
	const { id } = useLocalSearchParams() as { id: string };
	const navigation = useNavigation();
	const [recipe, setRecipe] = useState<Recipe | null>(null);
	useEffect(() => {
		navigation.setOptions({
			headerTitle: "Cook Recipe",
		});
		const fetchRecipe = async () => {
			try {
				const data = await getRecipe(id);
				setRecipe(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchRecipe();
	}, [navigation, id]);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Image
					source={{ uri: recipe?.image }}
					style={{ width: 200, height: 200 }}
				/>
				<Text style={styles.mainText}>Cook {recipe?.title}</Text>
				<ScrollView style={{ width: "75%" }}>
					{recipe?.instructions && (
						<Text>
							<Link href={recipe?.sourceUrl as Href} style={{ color: theme.text }}>
								{" "}
								Click here to see the recipe
							</Link>
						</Text>
					)}
				</ScrollView>
				{recipe?.extendedIngredients && (
					<FlatList
						data={recipe.extendedIngredients}
						renderItem={({ item }: Ingredients) => (
							<Text style={styles.ingredientText}> - {item.original}</Text>
						)}
						keyExtractor={(item) => item.id.toString().concat(item.name)}
						ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
						ListFooterComponent={() => <View style={{ marginBottom: 20 }} />}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

function createStyles(theme: Theme, colorScheme: ColorScheme) {
	return StyleSheet.create({
		container: {
			minHeight: "100%",
			flex: 1,
			backgroundColor: theme.background,
			alignItems: "center",
			justifyContent: "center",
		},
		mainText: {
			fontSize: 24,
			color: theme.text,
		},
		ingredientText: {
			fontSize: 16,
			color: theme.text,
		},
	});
}
export default CookRecipe;
