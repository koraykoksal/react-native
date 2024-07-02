import React from 'react'
import { HomePage, ProfilePage, Premium } from '../screens' // bu sayfaları screens içinde index.js içinde arayacak (veya screens/index.js diyerek dosya yolu belirtilebilir.)
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
                    headerShown: true,
                    // headerTitle:'',
                    headerBackTitleVisible: false,
                    headerTitleStyle: {
                        color: appColors.black
                    },
                    headerStyle: {
                        backgroundColor: appColors.white,
                    },
                }}
                component={HomePage}
            />

            <Stack.Screen name='Profile' component={ProfilePage} />

            <Stack.Screen name='Premium'
                options={{
                    headerShown: false,
                    headerTitle: "",
                    headerTitleStyle: {
                        color: appColors.headerTitle_W
                    },
                    headerTintColor: appColors.white
                }}
                component={Premium}
            />

        </Stack.Navigator>
    )
}

