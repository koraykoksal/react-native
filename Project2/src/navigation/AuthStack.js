import React from 'react'
import { LoginPage, RegisterPage } from '../screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '../../styles/GlobalStyles';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <Stack.Navigator
            // initialRouteName='Login'
            screenOptions={{ 
                headerShown:true,
                // headerTitle:'',
                headerBackTitleVisible:false ,// Geri tuşunun yanında "Back" yazısının görünmemesi için
                headerTintColor: '#000', // Geri tuşunun rengini beyaz yapmak için
                headerStyle: {
                    backgroundColor: `${appColors.appHeader}`, // Başlık arka planı rengi (örneğin, mavi tonları)
                  },
            }}
        >

            <Stack.Screen name='Sign In' component={LoginPage} />
            <Stack.Screen name='Sign Up' component={RegisterPage} />

        </Stack.Navigator>
    )
}
