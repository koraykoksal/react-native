import RootNavigation from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/app/store";

export default function App() {

  return (

    <Provider store={store}>
      <RootNavigation />
    </Provider>


  )
}


