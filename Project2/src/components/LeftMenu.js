import { StyleSheet, Text, View, ScrollView, Pressable, Image,SafeAreaView } from 'react-native'
import React from 'react'
import { barMenu } from '../helper/data'
import useAuthCall from '../hook/useAuthCall';
import { useNavigation } from '@react-navigation/native';
import { appColors } from '../../styles/GlobalStyles';
import appInfo from "../../package.json"
import { MaterialIcons } from '@expo/vector-icons';

export default function LeftMenu({ isMenuOpen, setIsMenuOpen }) {

    const { signOut } = useAuthCall()
    const navigate = useNavigation()

    const handlePres = (params) => {
        console.log(params)
        params.title === "Sign Out" && signOut()
        params.title === "Profile" && navigate.navigate('Profile')

        //açılır menüyü kapat
        setIsMenuOpen(false)
    }

    return (

        <SafeAreaView style={styles.contentContainer}>


            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end', padding: 20, width: '100%' }}>
                <Pressable
                    onPress={() => setIsMenuOpen(false)}
                >
                    <MaterialIcons name="arrow-back-ios-new" size={24} color={appColors.white} />
                </Pressable>
            </View>

            <ScrollView
                style={{ width: '100%' }}
            >

                {
                    isMenuOpen &&
                    (

                        barMenu.map((item, index) => (

                            <View key={index} style={styles.menuItem}>
                                <Image source={item.icon} resizeMode='cover' style={styles.imgStyle} />
                                <Pressable
                                    style={styles.list}
                                    onPress={() => handlePres(item)}
                                >
                                    <Text style={styles.textStyle}>{item.title}</Text>
                                </Pressable>
                            </View>
                        ))

                    )
                }
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footerTextStyle}>{appInfo.version}</Text>
            </View>

        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 20,
    },
    contentContainer: {
        flex: 1,
        // backgroundColor:'#272727', 
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 5,
        width: '100%'
    },
    menu: {
        backgroundColor: '#bebe',
        position: 'absolute',
        // top: 0,
        // left: 0,
        width: '100%',
        height: '100%',
        marginTop: 60,
        // borderTopRightRadius: 5,
        // borderBottomRightRadius: 5,
        // padding: 10,
        // zIndex: 1000,
        // flexDirection: 'column',
        // alignItems: 'flex-start',
    },
    menuItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomColor: appColors.gray
    },
    imgStyle: {
        width: 25,
        height: 25
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
        padding: 15
    },
    list: {
        width: '100%',
    },
    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTextStyle: {
        color: appColors.gray,
        fontSize: 16,
        padding: 10
    }
})
