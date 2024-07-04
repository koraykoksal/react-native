import { View, Text, Pressable, Image, ScrollView, Animated, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import football from "../../assets/images/football.png";
import basketball from "../../assets/images/basketball.png";
import dribbble from "../../assets/images/dribbble.png";
import Soccer from '../components/Sports/Soccer';
import Basketball from '../components/Sports/Basketball';
import Nba from '../components/Sports/Nba';
import { useNavigation } from '@react-navigation/native';
import Dashboard from './Dashboard';
import { appColors, homePageStyle } from '../../styles/GlobalStyles';
import { sportNames } from '../helper/data';
import { useSelector } from 'react-redux';
import useAuthCall from '../hook/useAuthCall';
import LeftMenu from '../components/LeftMenu';
import Premium from '../components/Modal/Premium';


export default function HomePage() {

  const { userData, userInfo } = useSelector((state) => state.auth)
  const { getUser } = useAuthCall()
  const navigate = useNavigation()
  const [activeButton, setActiveButton] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(new Animated.Value(-250)).current;
  const [modalVisible, setModalVisible] = useState(false);

  //? bottom alanındaki pressable butonu onclick olduğu zaman çalışacak fonksiyon
  const handleOnPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  //! kullanıcı login veya register olduğu zaman userData verisini kullanarak veritabanından kullanıcıya ait bilgileri çekme
  useEffect(() => {
    userData?.uid && getUser('users', userData.uid)
  }, [userData])


  // Menü açma/kapama işlemi
  const toggleMenu = () => {
    const toValue = isMenuOpen ? -250 : 0;
    setIsMenuOpen(!isMenuOpen); // Durumu önce güncelleriz
    Animated.timing(menuAnimation, {
      toValue,
      duration: 300, // Animasyon süresi
      useNativeDriver: false,
    }).start();
  };


  return (
    <SafeAreaView style={homePageStyle.container}>

      <View style={homePageStyle.header}>
        <View style={homePageStyle.headerContentStyle}>

          <Text style={homePageStyle.textStyle}>Balance : {userInfo?.defaultBalance}</Text>

          <Pressable onPress={() => {
            setModalVisible(true),
            // navigate.navigate('Premium'),
              //menu açıksa kapat
              isMenuOpen && setIsMenuOpen(false)
          }}>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              borderWidth: 1,
              borderColor: appColors.white,
              padding: 5,
              borderRadius: 5
            }}>

              {
                userInfo.premiumStatus === "active" ?
                  (
                    ""
                  )
                  :
                  (
                    <FontAwesome6 name="crown" size={24} color={appColors.yellow} />
                  )
              }


              <Text style={{ color: appColors.yellow, fontWeight: 'bold' }}>Premium</Text>

            </View>
          </Pressable>

          {/* MENU AC */}
          <Pressable
            onPress={toggleMenu}
          >
            {/* <FontAwesome5 name="bars" size={24} color="white" /> */}
            <FontAwesome6 name="bars-staggered" size={24} color="white" />
          </Pressable>


        </View>
      </View>

      {isMenuOpen ?
        (
          <Animated.View style={[styles.animatedMenu, { transform: [{ translateX: menuAnimation }] }]}>
            <LeftMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Animated.View>
        )
        :
        (
          <>
            <ScrollView
              style={homePageStyle.scrollView}
              contentContainerStyle={homePageStyle.contentContainer}
            >
              <View style={homePageStyle.content}>

                {activeButton === "Football" && <Soccer />}
                {activeButton === "Basketball" && <Basketball />}
                {activeButton === "NBA" && <Nba />}
                {activeButton === "" && <Dashboard />}

              </View>
            </ScrollView>

            <View style={homePageStyle.bottom}>
              <View style={homePageStyle.bottomContentStyle}>

                {
                  sportNames.map((item, index) => (
                    <Pressable
                      key={index}
                      style={[homePageStyle.bottomBtnStyle,
                      activeButton === item.title && homePageStyle.activeBtnStyle
                      ]}
                      onPress={() => handleOnPress(item.title)}
                    >
                      <Image source={item.icon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                      <Text style={{ color: appColors.black }}>{item.title}</Text>
                    </Pressable>
                  ))
                }

              </View>
            </View>

          </>
        )

      }

        <Premium modalVisible={modalVisible} setModalVisible={setModalVisible}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  animatedMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#272727',
    zIndex: 1000,
  },
});

