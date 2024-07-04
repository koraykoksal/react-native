import { StyleSheet, View, Image, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesome6 } from '@expo/vector-icons';
import { appColors } from '../../styles/GlobalStyles';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Premium from '../components/Modal/Premium';
import { Chip, withTheme, lightColors, Text, Icon } from '@rneui/themed';

export default function ProfilePage() {

  const navigate = useNavigation()
  const { userInfo } = useSelector((state) => state.auth)
  const imgFile = false
  const [modalVisible, setModalVisible] = useState(false);

  const gdprStatus = userInfo.gdpr ? "Enabled" : "Disabled";
  const notificationStatus = userInfo.notification ? "Enabled" : "Disabled";
  const premiumSatus = userInfo.premiumSatus ? "Enabled" : "Disabled";

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <View style={styles.header}>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, padding: 10, width: '80%', flexWrap: 'wrap' }}>
            <FontAwesome6 name="crown" size={30} color={appColors.yellow} />
            <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Premium Status : {premiumSatus}</Text>

            {
              premiumSatus === "Enabled" ?
                (
                  ""
                )
                :
                (
                  <Chip title="Upgrade"
                    icon={{
                      name: 'rocket',
                      type: 'font-awesome',
                      size: 20,
                      color: 'white',
                    }}
                    containerStyle={{ marginVertical: 15 }}
                    onPress={() => setModalVisible(true)}
                  />
                )
            }

          </View>




          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 15 }}>
            <Image source={require('../../assets/images/account.png')} style={styles.imgStyle} />
            <Icon
              disabled={userInfo.premiumSatus ? false : true}
              name='edit' color={'gray'} />
          </View>

          <View style={styles.content}>

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

      <Premium modalVisible={modalVisible} setModalVisible={setModalVisible} />
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