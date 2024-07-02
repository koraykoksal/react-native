import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, Pressable, Alert, Modal, Dimensions } from 'react-native';
// import Pdf from "react-native-pdf"
// import pdfDocument from "../../../assets/docs/TheBetIQ_privacy_en.pdf"

const PrivacyPolicy = ({ modalVisible, setModalVisible }) => {
    // const pdfDocument = require('../../../assets/docs/TheBetIQ_privacy_en.pdf');

    return (
        <SafeAreaView>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.container}>

                    {/* <Pdf
                    trustAllCerts={false}
                    source={pdfDocument}
                    style={styles.pdf}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                        }}
                        /> */}

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>

            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        backgroundColor: '#F194FF', // Red color removed for consistency
        position: 'absolute',
        bottom: 40, // Make sure button doesn't overlap the PDF content
        alignSelf: 'center'
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PrivacyPolicy;
