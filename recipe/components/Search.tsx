import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Appearance } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors'
import type { ColorScheme, Theme } from '@/constants/Types';

const Search = () => {
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const [search, setSearch] = useState('')
    console.log(search);
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
                <AntDesign name="search1" size={24} color="white" />
                <TextInput
                    placeholder='Search Ingredients'
                    placeholderTextColor={theme.text}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.searchText}
                />
            </View>
        </View>
    )
}

export default Search;
function createStyles(theme: Theme, colorScheme: ColorScheme) {
    return StyleSheet.create({
        searchContainer: {
            flexDirection: 'row',
            justifyContent: 'center'
        },
        searchBar: {
            paddingLeft: 12,
            width: '80%',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: theme.oppColor,
            flexDirection: 'row',
            alignItems: 'center'
        },
        searchText: {
            color: theme.text,
        }
    })
}