import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { loginPage } from '../../styles/GlobalStyles';
import loginIcon from "../../assets/images/signin.png"
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function LoginPage({ navigation }) {

    const [info, setInfo] = useState({
        username: "",
        password: ""
    })

    const handleChange = (id, value) => {
        setInfo(prevInfo => ({ ...prevInfo, [id]: value }));
    }



    return (
        <SafeAreaView style={loginPage.container}>

            {/* <StatusBar style="auto" /> */}

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 20 }}>
                <Text style={loginPage.betIQ}>BetIQ</Text>
                <Text>AI supported betting analysis.</Text>
            </View>

            <Image source={loginIcon} resizeMode='contain' style={loginPage.imgStyle} />


            <View style={loginPage.inputContainer}>
                <Text style={loginPage.textStyle}>Username</Text>
                <TextInput
                    inputMode='text'
                    style={loginPage.textInputStyle}
                    id='username'
                    value={info.username}
                    placeholder='Username'
                    onChangeText={(text) => handleChange('username', text)}
                />
            </View>

            <View style={loginPage.inputContainer}>
                <Text style={loginPage.textStyle}>Password</Text>

                <TextInput
                    secureTextEntry={true}
                    inputMode='text'
                    style={loginPage.textInputStyle}
                    id='password'
                    value={info.password}
                    placeholder='Enter Your Password'
                    onChangeText={(text) => handleChange('password', text)}
                />
            </View>

            <Pressable style={loginPage.btnLogin}>
                <Text style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>Sign In</Text>
            </Pressable>

            <View style={loginPage.signInMetods}>
                <AntDesign name="google" size={35} color="black" />
                <AntDesign name="apple1" size={35} color="black" />
            </View>


            <Text style={loginPage.textInfo} onPress={() => navigation.navigate('Sign Up')}>Don't you have an account ?</Text>


        </SafeAreaView>
    );
}


