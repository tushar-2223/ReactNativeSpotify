import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Home from '../screens/Authenticated/Home';

export type AuthenticatedProps = {
    [Routes.Home]: undefined
}

const Stack = createNativeStackNavigator<AuthenticatedProps>();

const Authenticated = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home}>
        </Stack.Navigator>
    )
}

export default Authenticated