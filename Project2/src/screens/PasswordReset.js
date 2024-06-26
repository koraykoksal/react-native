import { StyleSheet, Text, View, StatusBar, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { passwordResetPage } from '../../styles/GlobalStyles'
import useAuthCall from '../hook/useAuthCall'

export default function PasswordReset() {

  const {passwordReset}= useAuthCall()

  const [info, setInfo] = useState({
    email: ""
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
  });

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!info.email) {
      newErrors.email = "Email is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      passwordReset(info);
      setInfo({email:""})
    }
  }

  return (
    <View style={passwordResetPage.container}>

      <ScrollView
        style={passwordResetPage.scrollView}
        contentContainerStyle={passwordResetPage.contentContainer}
      >




        <View style={passwordResetPage.inputContainer}>

          <View style={passwordResetPage.inputContainerContent}>


            <Text style={passwordResetPage.textStyle}>Your Email Address</Text>
            <TextInput
              inputMode='email'
              style={passwordResetPage.textInputStyle}
              id='email'
              value={info.email ? info.email.toLowerCase() : ""}
              placeholder='user@example.com'
              onChangeText={(text) => handleChange('email', text)}
            />
            {errors.email ? <Text style={errorStyle('email')}>{errors.email}</Text> : null}
          </View>

          <Text style={passwordResetPage.textInfo}>
            Please enter your email address to reset your password. You may need to check your spam folder or unblock no-reply@thebetiq.com
          </Text>


          <Pressable
            style={passwordResetPage.btnSubmit}
            onPress={()=>handleSubmit()}
          >
            <Text style={passwordResetPage.btnTextStyle}>Send</Text>
          </Pressable>

        </View>







      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({})