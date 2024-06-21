import React from 'react'
import { HomePage, ProfilePage } from '../screens' // bu sayfaları screens içinde index.js içinde arayacak (veya screens/index.js diyerek dosya yolu belirtilebilir.)
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function UserStack() {
    return (
        <Stack.Navigator>

            <Stack.Screen name='Home' component={HomePage} />
            <Stack.Screen name='Profile' component={ProfilePage} />

        </Stack.Navigator>
    )
}

