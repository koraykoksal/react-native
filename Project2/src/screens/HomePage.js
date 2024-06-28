import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import football from "../../assets/images/football.png";
import basketball from "../../assets/images/basketball.png";
import dribbble from "../../assets/images/dribbble.png";
import premium from "../../assets/images/premium.png";
import Soccer from '../components/Sports/Soccer';
import Basketball from '../components/Sports/Basketball';
import Nba from '../components/Sports/Nba';
import { useNavigation } from '@react-navigation/native';
import Dashboard from './Dashboard';
import { appColors, homePageStyle } from '../../styles/GlobalStyles';
import { sportNames } from '../helper/data';
import { useSelector } from 'react-redux';
import useAuthCall from '../hook/useAuthCall';



export default function HomePage() {

  const { userData, userInfo } = useSelector((state) => state.auth)
  const { getUser } = useAuthCall()
  const navigate = useNavigation()
  const [activeButton, setActiveButton] = useState('');

  //? bottom alanındaki pressable butonu onclick olduğu zaman çalışacak fonksiyon
  const handleOnPress = (buttonName) => {
    setActiveButton(buttonName);
  };

  //! kullanıcı login veya register olduğu zaman userData verisini kullanarak veritabanından kullanıcıya ait bilgileri çekme
  useEffect(() => {
    userData?.uid && getUser('users', userData.uid)
  }, [userData])



  return (
    <View style={homePageStyle.container}>

      <View style={homePageStyle.header}>
        <View style={homePageStyle.headerContentStyle}>
          <Text style={homePageStyle.textStyle}>Balance : {userInfo?.defaultBalance}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>

            <Pressable onPress={() => navigate.navigate('Premium')}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, borderWidth: 1, borderColor: appColors.white, padding: 5, borderRadius: 5 }}>
                <Image source={premium} resizeMode='contain' style={{ width: 25, height: 25 }} />
                <Text style={{ color: appColors.yellow, fontWeight: 'bold' }}>PRO</Text>
              </View>
            </Pressable>


            <FontAwesome5 name="bars" size={24} color="white" />
          </View>
        </View>
      </View>

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
                <Text style={{ color: '#fff' }}>{item.title}</Text>
              </Pressable>
            ))
          }

        </View>
      </View>
    </View>
  );
}


