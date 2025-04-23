import type { ColorScheme, Theme } from '@/constants/Types';
import type { Href } from 'expo-router';
import { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, Alert, Appearance } from 'react-native';
import { router, Link } from 'expo-router';
import { authorizeUser } from '@/util/auth'
import { useSession } from '@/context/ctx';
import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const register = () => {
    const colorScheme = Appearance.getColorScheme() ?? 'dark';
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme)
    const [username, setUsername] = useState('');
    const { signIn } = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = async () => {
        if (username.length < 3) {
            Alert.alert("Username too short", "Username must be at least 3 characters long");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Password Mismatch", "Passwords do not match");
            return;
        }
        try {
            const result = await authorizeUser(email, password, username)
            if(result?.token){
                signIn(result?.token);
                router.replace("/" as Href)
            }
        }
        catch (err) {
            Alert.alert("Authentication failed", "Couldnt register check your credentials and try again");
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text style={styles.mainHeaderText}> <MaterialCommunityIcons name="chef-hat" size={32} color={theme.oppColor} /> SmartChef</Text>
            <View style={styles.formContainer}>
                <Text style={[styles.mainHeaderText, styles.loginHeaderText]}>Register</Text>
                <TextInput
                    placeholderTextColor={theme.text}
                    placeholder="Username"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    style={styles.formInput}
                />
                <TextInput
                    placeholderTextColor={theme.text}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType='email-address'
                    style={styles.formInput}
                />
                <TextInput
                    placeholderTextColor={theme.text}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    style={styles.formInput}
                />
                <TextInput
                    placeholderTextColor={theme.text}
                    placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    secureTextEntry={true}
                    style={styles.formInput}
                />
                <Pressable style={[styles.bttnMain, styles.bttn]} onPress={submitHandler}>
                    <Text style={styles.bttnText}>Register</Text>
                </Pressable>
            </View>
            <Text style={styles.linkText}>
                Already have an account? <Link href={"/" as Href} style={styles.link}>Login here</Link>
            </Text>
        </View>
    );
}
export default register;
function createStyles(theme:Theme, colorScheme:ColorScheme) {


    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            paddingTop: 50,
            backgroundColor: theme.background
        },
        mainHeaderText: {
            fontSize: 32,
            color: theme.text,
            fontWeight: 'bold',
        },
        loginHeaderText: {
            fontSize: 24,
            marginBottom: 20,
        },
        formContainer: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 12
        },
        formInput: {
            borderWidth: 1,
            borderColor: theme.oppColor,
            borderRadius: 10,
            width: '100%',
            marginBottom: 12,
            paddingLeft: 12,
            color: theme.text
        },
        bttnContainer: {
            flexDirection: 'row',
            gap: 6
        },
        bttnMain: {
            backgroundColor: Colors.persimmon800,
        },
        bttnSecondary: {
            backgroundColor: Colors.persimmon200,
        },
        bttn: {
            padding: 10,
            borderRadius: 15,
            width: '50%',
            alignItems: 'center'
        },
        bttnText: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        secondaryBttnText: {
            color: '#ED5E32'
        },
        linkText: {
            color: theme.text
        },
        link: {
            color: '#ED5E32',
            textDecorationLine: 'underline'
        }
    })
}