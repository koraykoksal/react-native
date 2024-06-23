import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { registerPage } from '../../styles/GlobalStyles';
import newAccountIcon from "../../assets/images/signup.png"
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import PrivacyPolicy from '../components/Modal/PrivacyPolicy';
import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"
import phone from "../../assets/images/phone2.png"
import useAuthCall from '../hook/useAuthCall';

const RegisterPage = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    const {singUp} = useAuthCall()

    const [info, setInfo] = useState({
        namesurname: "",
        username: "",
        email: "",
        password: "",
        notification: false, // dijital bilgilendirme servisi
        gdpr: false, // yasal hükümler
        isActive:false // mail aktivasyonu
    })


    // checkbox kontrol eden fonksiyon
    const toggleCheckbox = (key) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [key]: !prevInfo[key]
        }));
    };

    // inputlardan value bilgisini alan fonksiyon
    const handleChange = (id, value) => {
        setInfo(prevInfo => ({ ...prevInfo, [id]: value }));
    }




    return (

        <SafeAreaView style={registerPage.container}>

            <ScrollView
                style={registerPage.scrollView}
                contentContainerStyle={registerPage.contentContainer}
            >

                <View style={registerPage.logo}>
                    <Text style={registerPage.betIQ}>BetIQ</Text>
                    <Text>AI supported betting analysis.</Text>
                </View>

                <Image source={newAccountIcon} resizeMode='contain' style={registerPage.imgStyle} />


                <View style={registerPage.inputContainer}>
                    <Text style={registerPage.textStyle}>Name Surname</Text>

                    <TextInput
                        inputMode='text'
                        style={registerPage.textInputStyle}
                        id='namesurname'
                        value={info.namesurname}
                        placeholder='Name Surname'
                        onChangeText={(text) => handleChange('namesurname', text)}
                    />
                </View>

                <View style={registerPage.inputContainer}>
                    <Text style={registerPage.textStyle}>Username</Text>

                    <TextInput
                        secureTextEntry={false}
                        inputMode='text'
                        style={registerPage.textInputStyle}
                        id='username'
                        value={info.username}
                        placeholder='Username'
                        onChangeText={(text) => handleChange('username', text)}
                    />
                </View>

                <View style={registerPage.inputContainer}>
                    <Text style={registerPage.textStyle}>Email</Text>

                    <TextInput
                        secureTextEntry={false}
                        inputMode='email'
                        style={registerPage.textInputStyle}
                        id='email'
                        value={info.email.toLowerCase()}
                        placeholder='Email'
                        onChangeText={(text) => handleChange('email', text)}
                    />
                </View>

                <View style={registerPage.inputContainer}>
                    <Text style={registerPage.textStyle}>Password</Text>

                    <TextInput
                        secureTextEntry={true}
                        inputMode='text'
                        style={registerPage.textInputStyle}
                        id='password'
                        value={info.password}
                        placeholder='Password'
                        onChangeText={(text) => handleChange('password', text)}
                    />
                </View>


                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', padding: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            checked={info.gdpr}
                            onPress={() => toggleCheckbox('gdpr')}
                            // iconType="material-community"
                            iconType="ionicon"
                            checkedIcon="checkbox-outline" // işaretli olduğun görünecek icon şekli
                            uncheckedIcon={'ellipse-outline'} // işaretsiz olduğun görünecek icon şekli
                            containerStyle={registerPage.checkboxContainer}
                            wrapperStyle={registerPage.checkboxWrapper}
                            checkedColor='#000'
                            uncheckedColor='#000'
                            title={
                                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3, alignItems: 'center' }}>
                                    <Text>I have read and accept the privacy policy.</Text>
                                    <Text
                                        style={{ fontWeight: 700, textDecorationLine: 'underline' }}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        Click
                                    </Text>
                                </View>
                            }
                        />

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            checked={info.notification}
                            onPress={() => toggleCheckbox('notification')}
                            // iconType="material-community"
                            iconType="ionicon"
                            checkedIcon="checkbox-outline" // işaretli olduğun görünecek icon şekli
                            uncheckedIcon={'ellipse-outline'} // işaretsiz olduğun görünecek icon şekli
                            // uncheckedIcon={'checkbox-blank-outline'}
                            containerStyle={registerPage.checkboxContainer}
                            wrapperStyle={registerPage.checkboxWrapper}
                            checkedColor='#000'
                            uncheckedColor='#000'
                            title={<View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3, alignItems: 'center' }}>
                                <Text>Digital Notification Services.</Text>
                            </View>}
                        />
                    </View>


                </View>

                <Pressable style={registerPage.btnLogin} onPress={()=>singUp('users',info)}>
                    <Text style={{ color: '#fff', fontWeight: 700, fontSize: 17 }}>Sign Up</Text>
                </Pressable>


                <View style={registerPage.signUpMetods}>
                    <Image source={google} resizeMode='contain' style={registerPage.signInMethodsImg} />
                    {/* <Image source={facebook} resizeMode='contain' style={registerPage.signInMethodsImg} /> */}
                    <Image source={phone} resizeMode='contain' style={registerPage.signInMethodsImg} />
                </View>


                <Text style={registerPage.textInfo} onPress={() => navigation.navigate('Sign In')}>Already have an account?</Text>

            </ScrollView>


            <PrivacyPolicy modalVisible={modalVisible} setModalVisible={setModalVisible} />


        </SafeAreaView>


    )
}

export default RegisterPage