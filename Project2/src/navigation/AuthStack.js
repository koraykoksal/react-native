import React from 'react'
import { LoginPage, RegisterPage } from '../screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen name='Login' component={LoginPage} />
            <Stack.Screen name='Register' component={RegisterPage} />

        </Stack.Navigator>
    )
}
