import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { registerPage } from '../../styles/GlobalStyles';
import React, { useState, useEffect } from 'react';
import { CheckBox } from '@rneui/themed';
import PrivacyPolicy from '../components/Modal/PrivacyPolicy';
import facebook from "../../assets/images/facebook.png"
import google from "../../assets/images/google.png"
import phone from "../../assets/images/phone2.png"
import useAuthCall from '../hook/useAuthCall';
import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import { format } from "date-fns"
import { PASSWORD_REGEX } from "@env"

const RegisterPage = ({ navigation }) => {

    const { loading, userData } = useSelector((state) => state.auth)
    const { singUp, userNameCheck } = useAuthCall()
    const currentDate = new Date()
    const [modalVisible, setModalVisible] = useState(false);
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/
    // const passwordRegex = new RegExp(PASSWORD_REGEX);
    const [passwordRegexError, setPasswordRegexError] = useState("")

    const [info, setInfo] = useState({
        namesurname: "",
        username: "",
        email: "",
        password: "",
        notification: false, // dijital bilgilendirme servisi
        gdpr: false, // yasal hükümler
        isActive: false, // mail aktivasyonu
        defaultBalance: 3, // varsayılan bakiye
        premiumStatus: "passive",
        premiumBalance: 0,
        createdDate: format(currentDate, "yyyy-MM-dd HH:mm")
    })

    const [errors, setErrors] = useState({
        namesurname: "",
        username: "",
        email: "",
        password: "",
        gdpr: false
    });


    const errorStyle = (param) => {
        if (errors[param]) {
            return { color: 'red' };
        }
        return {};
    };

    // checkbox kontrol eden fonksiyon
    const toggleCheckbox = (key) => {
        setInfo(prevInfo => ({
            ...prevInfo,
            [key]: !prevInfo[key]
        }));
        setErrors(prevErrors => ({ ...prevErrors, [key]: false }));
    };

    // inputlardan value bilgisini alan fonksiyon
    const handleChange = (id, value) => {
        setInfo(prevInfo => ({ ...prevInfo, [id]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [id]: "" })); // Hata mesajını temizle
        setPasswordRegexError(""); // Şifre regex hatasını temizle
    }


    //! onchange işleminde girilen bilgilerin valide kontrolünü yap
    const validate = () => {
        let valid = true;
        let newErrors = {};

        if (!info.namesurname) {
            newErrors.namesurname = "Name Surname is required";
            valid = false;
        }

        if (!info.username) {
            newErrors.username = "Username is required";
            valid = false;
        }

        if (!info.email) {
            newErrors.email = "Email is required";
            valid = false;
        }

        if (!info.password) {
            newErrors.password = "Password is required";
            valid = false;
        }
        else if (!passwordRegex.test(info.password)) {
            newErrors.password = "Password must contain at least 6 characters and both uppercase and lowercase letters.";
            valid = false;
        }

        if (!info.gdpr) {
            newErrors.gdpr = "Required";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };


    const handleSubmit = async () => {
        const usernameExists = await userNameCheck("users", info.username);

        if (usernameExists) {
            setErrors({ ...errors, ['username']: "Username already exists" });
            return
        }

        if (validate()) {
            singUp('users', info);
        }
    }

    return (

        <SafeAreaView style={registerPage.container}>

            <ScrollView
                style={registerPage.scrollView}
                contentContainerStyle={registerPage.contentContainer}
            >

                <View
                    style={registerPage.header}
                >
                    <Text style={registerPage.headerText}>Create your account.</Text>
                </View>


                {/* NAME SURNAME */}
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
                    {errors.namesurname ? <Text style={errorStyle('namesurname')}>{errors.namesurname}</Text> : null}
                </View>

                {/* USERNAME */}
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
                    {errors.username ? <Text style={errorStyle('username')}>{errors.username}</Text> : null}
                </View>


                {/* EMAIL */}
                <View style={registerPage.inputContainer}>
                    <Text style={registerPage.textStyle}>Email</Text>

                    <TextInput
                        secureTextEntry={false}
                        inputMode='email'
                        style={registerPage.textInputStyle}
                        id='email'
                        value={info.email ? info.email.toLowerCase() : ""}
                        placeholder='Email'
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    {errors.email ? <Text style={errorStyle('email')}>{errors.email}</Text> : null}

                </View>

                {/* PASSWORD */}
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
                    {errors.password && <Text style={errorStyle('password')}>{errors.password}</Text>}
                    {passwordRegex && <Text style={errorStyle('password')}>{passwordRegexError}</Text>}

                </View>



                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', padding: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            checked={info.gdpr}
                            onPress={() => toggleCheckbox('gdpr')}
                            iconType="ionicon"
                            checkedIcon="checkbox-outline" // işaretli olduğun görünecek icon şekli
                            uncheckedIcon={'ellipse-outline'} // işaretsiz olduğun görünecek icon şekli
                            containerStyle={registerPage.checkboxContainer}
                            wrapperStyle={registerPage.checkboxWrapper}
                            checkedColor='#000'
                            uncheckedColor='#000'
                            title={
                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3, alignItems: 'center', padding: 5 }}>
                                        <Text>I have read and accept the privacy policy.</Text>
                                        <Text
                                            style={{ fontWeight: 700, textDecorationLine: 'underline' }}
                                            onPress={() => setModalVisible(!modalVisible)}
                                        >
                                            Click
                                        </Text>
                                    </View>

                                    {errors.gdpr ? <Text style={errorStyle('gdpr')}>{errors.gdpr}</Text> : null}

                                </View>
                            }
                        />

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox
                            checked={info.notification}
                            onPress={() => toggleCheckbox('notification')}
                            iconType="ionicon"
                            checkedIcon="checkbox-outline" // işaretli olduğun görünecek icon şekli
                            uncheckedIcon={'ellipse-outline'} // işaretsiz olduğun görünecek icon şekli
                            containerStyle={registerPage.checkboxContainer}
                            wrapperStyle={registerPage.checkboxWrapper}
                            checkedColor='#000'
                            uncheckedColor='#000'
                            title={
                                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 3, alignItems: 'center' }}>
                                    <Text>Digital Notification Services.</Text>
                                </View>
                            }
                        />
                    </View>


                </View>

                {
                    loading ?
                        (
                            <ActivityIndicator size={'small'} style={{ padding: 35 }} />
                        )
                        :
                        (
                            <Pressable style={registerPage.btnLogin} onPress={handleSubmit}>
                                <Text style={registerPage.btnText}>Sign Up</Text>
                            </Pressable>
                        )
                }



                <Text style={registerPage.textInfo} onPress={() => navigation.navigate('Sign In')}>Already have an account ?</Text>

            </ScrollView>


            <PrivacyPolicy modalVisible={modalVisible} setModalVisible={setModalVisible} />


        </SafeAreaView>


    )
}

export default RegisterPage