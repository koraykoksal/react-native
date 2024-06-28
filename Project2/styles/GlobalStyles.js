import { StyleSheet } from "react-native"

export const appColors = {
    authStackHeader: '#fff',
    pink: '#DBB5B5',
    white: '#fff',
    black: '#000',
    gray:'#A9A9A9',
    yellow:"#FFB743",
    other: '#4137B1',
    signUpBackground: "#E1AA3F",
    signInBackground: "#E1AA3F",
    homeBackground:"#4137B1",
    headerTitle_W: "#fff",
    passwordResetBackground: "#1D232B"
}


export const loginPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.signInBackground,
    },
    inputContainer: {
        width: '80%',
    },
    textStyle: {
        marginTop: 20,
        fontWeight: 700,
        fontSize: 16,
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
        marginTop: 50
    },
    scrollView: {
        marginHorizontal: 20,
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
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
        fontSize: 16,
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
        color:appColors.white
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

