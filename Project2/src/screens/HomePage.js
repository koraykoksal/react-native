import { StyleSheet, View, Text, Pressable, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { appColors } from '../../styles/GlobalStyles';
import avatar from "../../assets/images/avatar.png";
import football from "../../assets/images/football.png";
import basketball from "../../assets/images/basketball.png";
import dribbble from "../../assets/images/dribbble.png";
import Soccer from '../components/Sports/Soccer';
import Basketball from '../components/Sports/Basketball';
import Nba from '../components/Sports/Nba';

export default function HomePage() {
  const [activeButton, setActiveButton] = useState('');
  const [callComponent, setCallComponent] = useState('')


  //? bottom alanındaki pressable butonu onclick olduğu zaman çalışacak fonksiyon
  const handleOnPress = (buttonName) => {
    setActiveButton(buttonName);
    setCallComponent(buttonName)
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContentStyle}>
          <Text style={styles.textStyle}>Balance : 0</Text>
          <FontAwesome5 name="bars" size={24} color="white" />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.content}>

          {callComponent === "football" && <Soccer />}
          {callComponent === "basketball" && <Basketball />}
          {callComponent === "nba" && <Nba />}

        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <View style={styles.bottomContentStyle}>
          <Pressable
            style={[styles.bottomBtnStyle,
            activeButton === 'football' && styles.activeBtnStyle
            ]}
            onPress={() => handleOnPress('football')}
          >
            <Image source={football} resizeMode='contain' style={{ width: 35, height: 35 }} />
            <Text style={{ color: '#fff' }}>Football</Text>
          </Pressable>

          <Pressable
            style={[styles.bottomBtnStyle,
            activeButton === 'basketball' && styles.activeBtnStyle
            ]}
            onPress={() => handleOnPress('basketball')}
          >
            <Image source={basketball} resizeMode='contain' style={{ width: 35, height: 35 }} />
            <Text style={{ color: '#fff' }}>Basketball</Text>
          </Pressable>

          <Pressable
            style={[styles.bottomBtnStyle,
            activeButton === 'nba' && styles.activeBtnStyle
            ]}
            onPress={() => handleOnPress('nba')}
          >
            <Image source={dribbble} resizeMode='contain' style={{ width: 40, height: 40 }} />
            <Text style={{ color: '#fff' }}>NBA</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.gray,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70, // Header yüksekliği
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    backgroundColor: '#272727',
    padding: 10,
    zIndex: 1,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85, // Bottom bar yüksekliği
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#4137B1',
    padding: 10,
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: 80,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  pointStyle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  balanceTextStyle: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  textStyle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  bottomBtnStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
  },
  activeBtnStyle: {
    borderBottomWidth: 5,
    borderBottomColor: '#A9A9A9',
    marginTop: 5
  },
  bottomContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 1,
    width: '100%'
  },
  headerContentStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    gap: 5,
    width: '100%'
  }
});
