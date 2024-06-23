import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import Toast from 'react-native-toast-message';



export default function App() {

  return (

    <Provider store={store}>
      <RootNavigation />
      <Toast />
    </Provider>


  )
}


