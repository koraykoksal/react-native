import { StyleSheet } from "react-native"

export const appColors = {
    authStackHeader: '#fff',
    pink: '#DBB5B5',
    white: '#fff',
    black: '#000',
    gray: '#A9A9A9',
    yellow: "#FBC700",
    green: "#46775B",
    other: '#4137B1',
    signUpBackground: "#fff",
    // signUpBackground: "#E1AA3F",
    signInBackground: "#FBC700",
    // signInBackground: "#E1AA3F",
    homeBackground: "#46775B",
    headerTitle_W: "#fff",
    passwordResetBackground: "#375A64"
    // passwordResetBackground: "#1D232B"
}


export const loginPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.signInBackground,
    },
    inputContainer: {
        width: '80%',
    },
    inputContent: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 50
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 50,
        marginBottom: 50
    },
    bottom: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        marginTop: 20
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 17,
        alignSelf: 'flex-start',
        color: '#375A64'
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
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#375A64',
        // backgroundColor: '#1D232B',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#375A64',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 3
    },

    betIQ: {
        color: '#375A64',
        // color: '#D80032',
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
        gap: 10
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
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    headerText: {
        marginBottom: 30,
        marginTop: 30,
        fontSize: 23,
        fontWeight: 'bold',
        color: '#375A64'
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 17,
        alignSelf: 'flex-start',
        color: '#375A64'
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
        backgroundColor: appColors.yellow,
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#375A64',
        fontWeight: 'bold',
        fontSize: 18,
        letterSpacing: 3
    },
    textInfo: {
        // textDecorationLine: 'underline',
        marginTop: 10,
        marginBottom: 30,
    },
    betIQ: {
        color: '#375A64',
        // color: '#D80032',
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


export const passwordResetPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.passwordResetBackground,
    },
    inputContainer: {
        width: '80%',
        marginTop: 50
    },
    inputContainerContent: {
        flexDirection: 'column',
        width: '100%',
        gap: 5
    },
    textStyle: {
        // marginTop: 20,
        fontWeight: 700,
        fontSize: 16,
        alignSelf: 'flex-start',
        color: appColors.white,
    },
    btnTextStyle: {
        fontWeight: "bold",
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: appColors.black
    },
    textInputStyle: {
        width: '100%',
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#fff',
        height: 50,
        textAlign: 'center',
        fontSize: 18,
    },

    btnSubmit: {
        width: '100%',
        backgroundColor: appColors.white,
        height: 50,
        marginTop: 50,
        marginBottom: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInfo: {
        marginTop: 20,
        marginBottom: 30,
        color: appColors.white
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

})



export const homePageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // backgroundColor: appColors.gray,
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
        height: 100, // Bottom bar yüksekliği
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#46775B',
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

