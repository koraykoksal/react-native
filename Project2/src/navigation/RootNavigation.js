import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import AuthStack from './AuthStack';

export default function RootNavigation() {


    const token = false

  return (
   

    <NavigationContainer>


        {
            token ? <UserStack/> : <AuthStack/>
        }

    </NavigationContainer>

  )
}
