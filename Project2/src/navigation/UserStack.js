import React from 'react'
import { HomePage, ProfilePage } from '../screens' // bu sayfaları screens içinde index.js içinde arayacak (veya screens/index.js diyerek dosya yolu belirtilebilir.)
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function UserStack() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                // headerTitle:'',
                headerBackTitleVisible: false,// Geri tuşunun yanında "Back" yazısının görünmemesi için
                headerTintColor: '#000', // Geri tuşunun rengini beyaz yapmak için
                headerStyle: {
                    backgroundColor: '#bebe', // Başlık arka planı rengi (örneğin, mavi tonları)
                },
            }}
        >

            <Stack.Screen name='Home' component={HomePage} />
            <Stack.Screen name='Profile' component={ProfilePage} />

        </Stack.Navigator>
    )
}

