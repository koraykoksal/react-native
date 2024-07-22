import { View, Text, Pressable, Image, ScrollView, Animated, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import football from "../../assets/images/football.png";
import Soccer from '../components/Sports/Soccer';
import { useNavigation } from '@react-navigation/native';
import Dashboard from './Dashboard';
import { appColors, homePageStyle } from '../../styles/GlobalStyles';
import { useSelector } from 'react-redux';
import useAuthCall from '../hook/useAuthCall';
import LeftMenu from '../components/LeftMenu';
import Premium from '../components/Modal/Premium';
import DateTimePicker from '@react-native-community/datetimepicker';
import useSportCall from '../hook/useSportCall';
import { format } from "date-fns"
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {

  const { userData, userInfo } = useSelector((state) => state.auth)
  const { fixturesData, loading } = useSelector((state) => state.user)
  const { getUser } = useAuthCall()
  const { getFixtures } = useSportCall()

  const navigate = useNavigation()

  const [activeButton, setActiveButton] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useRef(new Animated.Value(-250)).current;
  const [modalVisible, setModalVisible] = useState(false);

  const currentYear = new Date().getFullYear()
  const [date, setDate] = useState(new Date());

  const [formattedDate, setFormattedDate] = useState(format(new Date(), 'yyyy-MM-dd'));

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


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setFormattedDate(format(currentDate, 'yyyy-MM-dd'));
  };


  useEffect(() => {
    if (formattedDate || activeButton === "fixtures") {
      const info = { formattedDate, currentYear };
      getFixtures(info);
    }
  }, [formattedDate, activeButton]);


  return (

    <SafeAreaProvider>
      <SafeAreaView style={homePageStyle.container}>

        <View style={homePageStyle.header}>
          <View style={homePageStyle.headerContentStyle}>

            <Text style={homePageStyle.textStyle}>Balance : Trial ({userInfo?.defaultBalance})</Text>

            <Pressable onPress={() => {
              setModalVisible(true),
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

              {/* CONTENT COMPONENTS */}
              <View style={homePageStyle.content}>
                {
                  activeButton === "fixtures" && <Soccer fixturesData={fixturesData} />
                }
                {(activeButton === "home") && <Dashboard />}
              </View>


              {/* TOP */}
              <View style={homePageStyle.top}>

                {/* DATE & FİLTER */}
                {
                  activeButton === "fixtures" &&
                  <>
                    <DateTimePicker
                      value={date}
                      mode={'date'}
                      is24Hour={true}
                      display="clock"
                      onChange={onChange}
                    />

                    <Pressable>
                      <AntDesign name="filter" size={28} color="black" />
                    </Pressable>

                  </>
                }

              </View>


              {/* BOTTOM */}
              <View
                style={{
                  position: 'absolute',
                  height: 70,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  backgroundColor: 'rgba(70, 119, 91, 0.9)',
                  borderWidth: 1,
                  borderColor: appColors.gray,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50
                }}
              >

                {/* HOME */}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                  <Ionicons
                    name={activeButton === "home" ? "home" : "home-outline"}
                    size={34}
                    color="white"
                    onPress={() => setActiveButton("home")} />

                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: activeButton === "home" ? "bold" : "normal"
                    }}
                  >
                    Home
                  </Text>

                </View>


                {/* FİXTURES */}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 30 }}>

                  <Pressable
                    style={{ backgroundColor: '#fff', borderRadius: '50%', padding: 1 }}
                    onPress={() => handleOnPress('fixtures')}
                  >
                    <View
                      style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}
                    >
                      <Image
                        source={football} resizeMode='contain'
                        style={{
                          width: 45,
                          height: 45,
                          backgroundColor: activeButton === "fixtures" ? appColors.yellow : appColors.gray,
                          borderRadius: '50%',
                        }}
                      />
                    </View>
                  </Pressable>

                  <Text style={{
                    color: '#fff',
                    fontWeight: activeButton === "fixtures" ? 'bold' : 'normal', fontSize: 14
                  }}
                  >
                    Fixtures
                  </Text>

                </View>

                {/* FAVORİTES */}
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                  <FontAwesome
                    name={activeButton === "favorites" ? "star" : "star-o"}
                    size={34}
                    color={'white'}
                    onPress={() => setActiveButton("favorites")}
                  />

                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: activeButton === "favorites" ? "bold" : "normal"
                    }}
                  >
                    Favorites
                  </Text>

                </View>
              </View>

            </>
          )

        }

        <Premium modalVisible={modalVisible} setModalVisible={setModalVisible} />

      </SafeAreaView>
    </SafeAreaProvider>
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

