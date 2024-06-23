import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { loginPage } from '../../styles/GlobalStyles';
import loginIcon from "../../assets/images/signin.png"
import { useState } from 'react';
import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"
import phone from "../../assets/images/phone2.png"

export default function LoginPage({ navigation }) {

    const [info, setInfo] = useState({
        email: "",
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
                <Text style={loginPage.textStyle}>Email</Text>
                <TextInput
                    inputMode='text'
                    style={loginPage.textInputStyle}
                    id='email'
                    value={info.email.toLowerCase()}
                    placeholder='Email'
                    onChangeText={(text) => handleChange('email', text)}
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
            <Image source={google} resizeMode='contain' style={loginPage.signInMethodsImg} />
            {/* <Image source={facebook} resizeMode='contain' style={loginPage.signInMethodsImg} /> */}
            <Image source={phone} resizeMode='contain' style={loginPage.signInMethodsImg} />
            </View>


            <Text style={loginPage.textInfo} onPress={() => navigation.navigate('Sign Up')}>Don't you have an account ?</Text>


        </SafeAreaView>
    );
}


