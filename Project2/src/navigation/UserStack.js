import React from 'react'
import { HomePage, ProfilePage } from '../screens' // bu sayfaları screens içinde index.js içinde arayacak (veya screens/index.js diyerek dosya yolu belirtilebilir.)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '../../styles/GlobalStyles';


const Stack = createNativeStackNavigator();


export default function UserStack() {
    return (
        <Stack.Navigator
            // initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                // headerTitle:'',
                headerBackTitleVisible: false,
                headerTintColor: appColors.black,
                headerStyle: {
                    backgroundColor: appColors.white,
                },
                headerTitleStyle: {
                    color: appColors.black
                }
            }}

        >

            <Stack.Screen name='Home'
                options={{
                    headerShown: false,
                    headerTitle:'',
                    headerBackTitleVisible: false,
                    headerTitleStyle: {
                        color: appColors.black
                    },
                    headerStyle: {
                        backgroundColor: appColors.green,
                    },
                }}
                component={HomePage}
            />

            <Stack.Screen name='Profile' component={ProfilePage} />


        </Stack.Navigator>
    )
}

