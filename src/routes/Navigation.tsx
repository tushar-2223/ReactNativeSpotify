import { View, Text } from 'react-native'
import React from 'react'
import Authenticated from './Authenticated'
import UnAuthenticated from './UnAuthenticated'
import { Routes } from './Routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type NavigationProps = {
  [Routes.Authenticated]: undefined,
  [Routes.UnAuthenticated]: undefined
}

const Stack = createNativeStackNavigator<NavigationProps>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
      <Stack.Screen name={Routes.UnAuthenticated} component={UnAuthenticated} />
    </Stack.Navigator>
  )
}

export default Navigation