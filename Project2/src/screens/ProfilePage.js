import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesome6 } from '@expo/vector-icons';
import { appColors } from '../../styles/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';


export default function ProfilePage() {

  const { userInfo } = useSelector((state) => state.auth)
  const imgFile = false

  const gdprStatus = userInfo.gdpr ? "Enabled" : "Disabled";
  const notificationStatus = userInfo.notification ? "Enabled" : "Disabled";

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 10, width: '80%' }}>
            <FontAwesome6 name="crown" size={30} color={appColors.yellow} />
            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Premium Status : {userInfo.premiumSatus}</Text>
          </View>

          <Image source={require('../../assets/images/account.png')} style={styles.imgStyle} />

          <View style={styles.content}>

            <View style={{ width: '80%', flexDirection: 'row', alignItems: 'flex-start' }}>
              <Pressable 
              disabled={userInfo.premiumSatus ? false:true}
              >
                <AntDesign name="edit" size={30} color="gray" />
              </Pressable>
            </View>

            <View style={styles.contentStyle}>
              <Text style={{ fontSize: 18, color: appColors.yellow }}>Name Surname</Text>
              <Text style={styles.textStyle}>{userInfo.namesurname}</Text>
            </View>
            <View style={styles.contentStyle}>
              <Text style={{ fontSize: 18, color: appColors.yellow }}>Username</Text>
              <Text style={styles.textStyle}>{userInfo.username}</Text>
            </View>
            <View style={styles.contentStyle}>
              <Text style={{ fontSize: 18, color: appColors.yellow }}>Email</Text>
              <Text style={styles.textStyle}>{userInfo.email}</Text>
            </View>
            <View style={styles.contentStyle}>
              <Text style={{ fontSize: 18, color: appColors.yellow }}>GDPR</Text>
              <Text style={styles.textStyle}>{gdprStatus}</Text>
            </View>
            <View style={styles.contentStyle}>
              <Text style={{ fontSize: 18, color: appColors.yellow }}>Notification</Text>
              <Text style={styles.textStyle}>{notificationStatus}</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 50,
    width: '100%'
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  imgStyle: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    marginTop: 30,
    width: '100%'
  },
  contentStyle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 5,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: appColors.gray
  }
})