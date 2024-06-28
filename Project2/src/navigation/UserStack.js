import React from 'react'
import { HomePage, ProfilePage,Premium } from '../screens' // bu sayfaları screens içinde index.js içinde arayacak (veya screens/index.js diyerek dosya yolu belirtilebilir.)
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
                headerBackTitleVisible: false,// Geri tuşunun yanında "Back" yazısının görünmemesi için
                headerTintColor: appColors.black, // Geri tuşunun rengini beyaz yapmak için
                headerStyle: {
                    backgroundColor: appColors.homeBackground, // Başlık arka planı rengi (örneğin, mavi tonları)
                },
                headerTitleStyle:{color:appColors.white}
            }}
            
        >

            <Stack.Screen name='Home' options={{headerTitleStyle:{color:appColors.headerTitle_W}}} component={HomePage} />
            <Stack.Screen name='Profile' component={ProfilePage} />
            <Stack.Screen name='Premium' component={Premium} />

        </Stack.Navigator>
    )
}

