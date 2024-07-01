import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { barMenu } from '../helper/data'
import useAuthCall from '../hook/useAuthCall';


export default function LeftMenu({ isMenuOpen }) {

    const { signOut } = useAuthCall()

    const handlePres = (params) => {
        params.title === "Sign Out" && signOut()
    }

    return (

        <View style={styles.contentContainer}>
            {
                isMenuOpen &&
                (

                    barMenu.map((item, index) => (
                        // <Pressable key={index} style={styles.menuItem} onPress={handlePres(item)}>
                        //     <Image source={item.icon} resizeMode='cover' style={{height:30,width:30}}/>
                        //     <Text style={styles.textStyle}>{item.title}</Text>
                        // </Pressable>
                        <View key={index} style={styles.menuItem}>
                            <Image source={item.icon} resizeMode='cover' style={{ height: 30, width: 30 }} />
                            <Pressable
                                style={{ width: '100%', backgroundColor: 'pink' }}
                                onPress={() => handlePres(item)}
                            >
                                <Text style={styles.textStyle}>{item.title}</Text>
                            </Pressable>
                        </View>
                    ))

                )
            }
        </View>


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
        gap: 5
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
        paddingLeft: 10
    },
    textStyle: {
        color: '#fff',
        fontSize: 20,
        padding: 15
    }
})
