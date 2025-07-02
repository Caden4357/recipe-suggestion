import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Redirect } from 'expo-router';
import { getCurrentUser } from '@/util/auth';
import ProfileHeader from '@/components/Profile/ProfileHeader';
import ProfileMenu from '@/components/Profile/ProfileMenu';
import Header from '@/components/Profile/Header';

const Profile = () => {
    const [username, setUsername] = useState<string | null | undefined>('');
    const [email, setEmail] = useState<string | null | undefined>('');

    useEffect(() => {
        async function getUser() {
            const user = await getCurrentUser();
            console.log("USER: ", user);
            if (!user) return <Redirect href="/sign-in" />; // this isnt working atm??
            setUsername(user.displayName);
            setEmail(user.email);
        }
        getUser()
    }, [])

    return (
        <View className='flex-1 items-center dark:bg-zinc-900 bg-white '>
            <Header />
            <ProfileHeader username={username} email={email} />
            <ProfileMenu />
        </View>
    );
}

export default Profile;
