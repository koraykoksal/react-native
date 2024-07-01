import React from 'react'
import { LoginPage, RegisterPage, PasswordReset,Started } from '../screens'
import { NavigationContainer, useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { appColors } from '../../styles/GlobalStyles';

const Stack = createNativeStackNavigator();

export default function AuthStack() {

    return (
        <Stack.Navigator
        // initialRouteName='Login'
        // screenOptions={{
        //     headerShown: true,
        //     // headerTitle:'',
        //     headerBackTitleVisible: false,// Geri tuşunun yanında "Back" yazısının görünmemesi için
        //     headerTintColor: '#000', // Geri tuşunun rengini beyaz yapmak için
        //     headerStyle: {
        //         backgroundColor: `${appColors.authStackHeader}`, // Başlık arka planı rengi (örneğin, mavi tonları)
        //       },
        // }}
        >

            <Stack.Screen
            name='Get Started'
            component={Started}
            options={{
                headerShown: false, // başlık çubuğu
                headerTitle: "", // header başlığı
                headerBackTitleVisible: false,
                // headerTintColor: appColors.black,
                headerStyle: {
                    backgroundColor: '#364F81'
                },
                headerTitleAlign: 'center',
            
            }}
            />


            <Stack.Screen
                name='Sign In' // sayfa adı
                component={LoginPage} // sayfanın kendisi
                options={{
                    headerShown: false, // başlık çubuğu
                    headerTitle: "", // header başlığı
                    headerBackTitleVisible: false,
                    headerTintColor: appColors.black, // geri tuşu ve title rengi beraber değiyor
                    headerStyle: {
                        backgroundColor: appColors.signInBackground
                    },
                    headerTitleAlign: 'center', // Başlık metnini ortalamak için

                }}
            />

            <Stack.Screen
                name='Sign Up' // sayfa ismi
                component={RegisterPage} // sayfanın kendisi
                options={{
                    headerShown: true, // başlık çubuğu
                    headerTitle: "", // header başlığı
                    headerBackTitleVisible: false,
                    headerTintColor: appColors.black, // geri tuşu ve title rengi beraber değiyor
                    headerStyle: {
                        backgroundColor: appColors.signUpBackground
                    },
                    headerTitleAlign: 'center', // Başlık metnini ortalamak için

                }}
            />


            <Stack.Screen
                name='Password Reset' // sayfa ismi
                component={PasswordReset} // sayfanın kendisi
                options={{
                    headerShown: true, // başlık çubuğu
                    // headerTitle: "", // header başlığı
                    headerBackTitleVisible: false,
                    headerTintColor: appColors.white, // geri tuşu ve title rengi beraber değiyor
                    headerStyle: {
                        backgroundColor: appColors.passwordResetBackground,
                    },
                    headerTitleAlign: 'center', // Başlık metnini ortalamak için
                }}
            />

        </Stack.Navigator>
    )
}
