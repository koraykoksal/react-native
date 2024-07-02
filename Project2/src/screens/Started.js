import { StyleSheet, Text, View, ScrollView, Image, Pressable,SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import animo from "../../assets/animations/animation.json"
import LottieView from "lottie-react-native";

export default function Starter() {
    const navigate = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        BetIQ
                    </Text>
                    <Text style={styles.subHeaderText}>AI supported betting analysis.</Text>
                </View>

   
                <View style={styles.imageContainer}>
                    <LottieView
                    source={require('../../assets/animations/animation.json')}
                    autoPlay
                    loop
                    style={{marginTop:200,height:'80%',width:'80%',backgroundColor:'transparent'}}
                    />
                    {/* <Text style={{color:'#fff',fontSize:18}}>High Accuracy</Text>
                    <Text style={{color:'#fff',fontSize:18}}>Prediction Options</Text>
                    <Text style={{color:'#fff',fontSize:18}}>Fast Processing</Text>
                    <Text style={{color:'#fff',fontSize:18}}>User-Friendly</Text> */}
                </View>

                <Pressable style={styles.btnStarter} onPress={() => navigate.navigate('Sign In')}>
                    <Text style={styles.startedTextStyle}>Get Started</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#000'
        backgroundColor: '#fff'
        // backgroundColor: '#364F81'
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        marginTop: 100,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        gap:10
    },
    headerText: {
        fontWeight: 'bold',
        color: '#375A64',
        fontSize: 30,
        letterSpacing:5
    },
    subHeaderText: {
        color: "#000",
        fontSize: 18,
        fontWeight: 'normal',
    },
    imageContainer: {
        width: '100%',
        height: 300,
        // position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
        gap:5
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    btnStarter: {
        // backgroundColor: '#4CC486',
        width:'70%',
        height:50,
        backgroundColor: '#FBC700',
        // backgroundColor: '#850F8D',
        borderWidth: 1,
        borderColor: '#375A64',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:150
        // position: 'absolute', // Butonu image üzerinde ortalar
    },
    startedTextStyle: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 3,
        textAlign: 'center',
    }
});
