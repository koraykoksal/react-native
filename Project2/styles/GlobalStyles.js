import { StyleSheet } from "react-native"


export const loginPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    contant1: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 18
    },
    textInputStyle: {
        width: '80%',
        borderWidth: 0.5,
        borderRadius: 10,
        height: 50,
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 18,
    },
    imgStyle: {
        height: 65,
        marginTop: 25,
        marginBottom: 25
    },
    btnLogin: {
        width: '50%',
        backgroundColor: '#1D232B',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInfo: {
        textDecorationLine: 'underline',
        padding: 10
    },
    betIQ: {
        color: '#D80032',
        fontSize: 35,
        fontWeight: 800,
        letterSpacing: 5,
    },
})



export const registerPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // gap: 10
    },
    contant1: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 18
    },
    textInputStyle: {
        width: '80%',
        borderWidth: 0.5,
        borderRadius: 10,
        height: 50,
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 18,
    },
    imgStyle: {
        height: 65,
        marginTop: 25,
        marginBottom: 25
    },
    btnLogin: {
        width: '50%',
        backgroundColor: '#1D232B',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInfo: {
        textDecorationLine: 'underline',
        marginTop: 10,
        marginBottom: 30,
    },
    betIQ: {
        color: '#D80032',
        fontSize: 35,
        fontWeight: 800,
        letterSpacing: 5,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3
    },
    logo:{
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 10, 
        marginTop:15,
        marginBottom: 10 
    }
})