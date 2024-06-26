import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { ToastProvider } from 'react-native-toast-notifications'


export default function App() {

  return (

    <Provider store={store}>
      <ToastProvider>
        <RootNavigation />
      </ToastProvider>
    </Provider>


  )
}


