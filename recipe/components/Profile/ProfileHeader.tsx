import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
    username: string | null | undefined,
    email: string | null | undefined
}
const ProfileHeader = ({ username, email }: Props) => {
    return (
        <View>
            <Text className='dark:text-white text-xl mt-4'>{username}</Text>
            <Text className='dark:text-white text-xl mt-2 mb-10'>{email}</Text>
        </View>
    );
}

export default ProfileHeader;