import { useToast } from "react-native-toast-notifications";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const useToastNotify = () => {
    const toast = useToast();
  
    // başarılı işlem bilgilendirmesi
    const toastSuccessNotify = (msg) => {
      toast.show(msg, {
        type: "success",
        placement: "bottom",
        duration: 1000,
        offset: 30,
        animationType: "slide-in",
        style: { backgroundColor: 'green' },
        icon:<FontAwesome name="thumbs-up" size={24} color="#fff" />,
        textStyle:{fontSize:16}
      });
    };

    // hatalı işlem bilgilendirmesi
    const toastErrorNotify = (msg) => {
      toast.show(msg, {
        type: "danger",
        placement: "bottom",
        duration: 3000,
        offset: 30,
        animationType: "slide-in",
        style: { backgroundColor: 'red' },
        icon:<MaterialIcons name="error" size={24} color="#fff" />,
        textStyle:{fontSize:16}
      });
    };

    // hatalı işlem bilgilendirmesi
    const toastInfoNotify = (msg) => {
      toast.show(msg, {
        type: "normal",
        placement: "bottom",
        duration: 1500,
        offset: 30,
        animationType: "slide-in",
        style: { backgroundColor: 'gray' },
        icon:<AntDesign name="infocirlce" size={24} color="#fff" />,
        textStyle:{fontSize:16}
      });
    };
  
    return { 
        toastSuccessNotify,
        toastErrorNotify,
        toastInfoNotify
     };
  };
  
  export default useToastNotify;