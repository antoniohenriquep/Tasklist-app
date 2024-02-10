import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name ="Home" component={Login}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}