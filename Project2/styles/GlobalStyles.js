import { StyleSheet } from "react-native"

export const appColors = {
    authStackHeader: '#fff',
    pink:'#DBB5B5',
    white:'#fff',
    black:'#000',
    other:'#E1AA1F',
    signUpBackground:"#D18959",
    signInBackground:"#E1AA1F"
}

export const loginPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.signInBackground,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    inputContainer: {
        width: '80%',
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 18,
        alignSelf: 'flex-start'
    },
    textInputStyle: {
        width: '100%',
        borderBottomWidth: 0.5,
        borderRadius: 10,
        height: 50,
        textAlign: 'left',
        marginVertical: 5,
        fontSize: 18,
    },
    imgStyle: {
        height: 45,
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
    signInMetods: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        padding: 10
    },
    signInMethodsImg: {
        height: 45,
        width: 45
    }
})



export const registerPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.signUpBackground,
    },
    inputContainer: {
        width: '80%',
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 18,
        alignSelf: 'flex-start'
    },
    textInputStyle: {
        width: '100%',
        borderBottomWidth: 0.5,
        borderRadius: 10,
        height: 50,
        textAlign: 'left',
        marginVertical: 5,
        fontSize: 18,
    },
    imgStyle: {
        height: 45,
        marginTop: 30,
        marginBottom: 30
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
    logo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 15,
        marginBottom: 10
    },
    signUpMetods: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        padding: 10
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    checkboxWrapper: {
        backgroundColor: 'transparent',
    },
    signInMethodsImg: {
        height: 45,
        width: 45
    }
})


