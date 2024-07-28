import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import SignUp from '../screens/UnAuthenticated/SignUp';

export type UnAuthenticatedProps = {
  [Routes.SignUp]: undefined
}

const Stack = createNativeStackNavigator<UnAuthenticatedProps>();

const UnAuthenticated = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.SignUp} component={SignUp}/>
    </Stack.Navigator>
  )
}

export default UnAuthenticated