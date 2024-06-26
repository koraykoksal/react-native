import React from 'react'
import { HomePage, ProfilePage,OtherPage1,OtherPage2 } from '../screens' // bu sayfaları screens içinde index.js içinde arayacak (veya screens/index.js diyerek dosya yolu belirtilebilir.)
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '../../styles/GlobalStyles';


const Stack = createNativeStackNavigator();


export default function UserStack() {
    return (
        <Stack.Navigator
            // initialRouteName='Home'
            screenOptions={{
                headerShown: true,
                headerTitle:'',
                headerBackTitleVisible: false,// Geri tuşunun yanında "Back" yazısının görünmemesi için
                headerTintColor: appColors.black, // Geri tuşunun rengini beyaz yapmak için
                headerStyle: {
                    backgroundColor: appColors.homeBackground, // Başlık arka planı rengi (örneğin, mavi tonları)
                },
            }}
            
        >

            <Stack.Screen name='Home' options={{headerTitleStyle:{color:appColors.headerTitle_W}}} component={HomePage} />
            <Stack.Screen name='Profile' component={ProfilePage} />
            <Stack.Screen name='OtherPage1' component={OtherPage1} />
            <Stack.Screen name='OtherPage2' component={OtherPage2} />

        </Stack.Navigator>
    )
}

