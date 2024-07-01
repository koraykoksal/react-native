import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { loginPage } from '../../styles/GlobalStyles';
import loginIcon from "../../assets/images/signin.png"
import { useState } from 'react';
import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"
import phone from "../../assets/images/phone2.png"
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import useAuthCall from '../hook/useAuthCall';

export default function LoginPage({ navigation }) {

    const { loading } = useSelector((state) => state.auth)
    const { signIn } = useAuthCall()
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })

    const errorStyle = (param) => {
        if (errors[param]) {
            return { color: 'red' };
        }
        return {};
    };

    const handleChange = (id, value) => {
        setInfo(prevInfo => ({ ...prevInfo, [id]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [id]: "" })); // Hata mesajını temizle
    }

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!info.email) {
            newErrors.email = "Email is required";
            valid = false;
        }

        if (!info.password) {
            newErrors.password = "Password is required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            signIn(info);
        }
    }


    return (
        <SafeAreaView style={loginPage.container}>

            <ScrollView
                style={loginPage.scrollView}
                contentContainerStyle={loginPage.contentContainer}
            >


                <View style={loginPage.header}>
                    <Text style={loginPage.betIQ}>BetIQ</Text>
                    <Text>AI supported betting analysis.</Text>
                </View>



                <View style={loginPage.inputContent}>
                    
                    <View style={loginPage.inputContainer}>
                        <Text style={loginPage.textStyle}>Email</Text>
                        <TextInput
                            inputMode='email'
                            style={loginPage.textInputStyle}
                            id='email'
                            value={info.email ? info.email.toLowerCase() : ""}
                            placeholder='Your Email'
                            onChangeText={(text) => handleChange('email', text)}
                        />
                        {errors.email ? <Text style={errorStyle('email')}>{errors.email}</Text> : null}
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
                        {errors.password ? <Text style={errorStyle('password')}>{errors.password}</Text> : null}
                    </View>
                    
                </View>

                {
                    loading ? (
                        <ActivityIndicator size={'small'} style={{ padding: 35 }} />
                    )
                        :
                        (
                            <Pressable style={loginPage.btnLogin} onPress={handleSubmit}>
                                <Text style={loginPage.btnText}>Sign In</Text>
                            </Pressable>
                        )
                }



                <View style={loginPage.bottom}>
                    <Text
                        onPress={() => navigation.navigate('Password Reset')}
                    >
                        Forgot your password ?
                    </Text>


                    <Text onPress={() => navigation.navigate('Sign Up')}>Don't you have an account ?</Text>
                </View>

            </ScrollView>


        </SafeAreaView>
    );
}


