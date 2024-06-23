import { useNavigation } from "@react-navigation/native"
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import {getDatabase,onValue, ref, remove, set, update } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {format} from "date-fns"
import {fireAuth,fireDB,fireStore} from "../firebase/firebaseConfig.js"
import { useDispatch } from "react-redux";
import { fetchUserSignUpData } from "../features/authSlice.js";
import { toastSuccessNotify } from "../helper/ToastNotify.js";

const useAuthCall = () => {

    const navigate = useNavigation()
    const currentDate = new Date()
    const dispatch = useDispatch()

    const singUp = async (address,info) => {

        // const firestore = getFirestore();
        const db = getDatabase()
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, info.email, info.password)
            .then((userCredential) => {

                const user = userCredential.user;

                //? realtime database
                const createdUser= set(ref(db, `${address}/` + user.uid), info);

                //? firestore database
                // return setDoc(doc(firestore, 'users', user.uid), {
                //     email: user.email,
                //     namesurname:info.namesurname,
                //     username:info.username,
                //     notification:info.notification,
                //     gdpr:info.gdpr,
                //     createdAt: format(currentDate,"yyyy-MM-dd HH:mm"),
                // });

                const combinedData = {user,createdUser}

                if(user && createdUser){
                    dispatch(fetchUserSignUpData(combinedData))
                    toastSuccessNotify('Success')
                }
                else{
                    console.log('Something went wrong !')
                }
            })
            .then(() => {
                console.log("Success : ",'User created and data saved to Firestore');
            })
            .catch((error) => {
                console.log("Error : ",error.message)
            });
    }




    return {

        singUp
    }




}



export default useAuthCall