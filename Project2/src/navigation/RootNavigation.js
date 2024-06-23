import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import app from "../firebase/firebaseConfig" //? firebase yapılandırmasını başlat
import { useSelector } from 'react-redux';


export default function RootNavigation() {


    const {token} = useSelector((state)=>state.auth)

  return (
   

    <NavigationContainer>


        {
            token ? <UserStack/> : <AuthStack/>
        }

    </NavigationContainer>

  )
}
