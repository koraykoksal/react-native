import Toast from 'react-native-toast-message';


export const toastSuccessNotify = (msg) => {
    Toast.show({
        type: 'success',
        position:'top',
        visibilityTime:2000,
        text1: msg,
    });
  };