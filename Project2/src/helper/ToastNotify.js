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
        placement: "top",
        duration: 2000,
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
        placement: "top",
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
        placement: "top",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
        style: { backgroundColor: '#96C9F4' },
        // icon:<AntDesign name="infocirlce" size={24} color="#fff" />,
        textStyle:{fontSize:16,color:'#000'}
      });
    };
  
    return { 
        toastSuccessNotify,
        toastErrorNotify,
        toastInfoNotify
     };
  };
  
  export default useToastNotify;