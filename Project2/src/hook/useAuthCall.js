import { useNavigation } from "@react-navigation/native"
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getDatabase, onValue, ref, remove, set, update, child ,get} from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber, PhoneAuthProvider, GoogleAuthProvider, RecaptchaVerifier, sendPasswordResetEmail } from 'firebase/auth';
import { format } from "date-fns"
import { useDispatch } from "react-redux";
import { fetchFail, fetchLogOut, fetchStart, fetchUserInfo, fetchUserSignInData, fetchUserSignUpData } from "../features/authSlice.js";
import useToastNotify, { toastSuccessNotify } from "../helper/ToastNotify.js";
import { authErrorMessage, loginErrorMessage } from "../helper/control.js";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useState } from "react";


const useAuthCall = () => {

    const navigate = useNavigation()
    const currentDate = new Date()
    const dispatch = useDispatch()

    // const firestore = getFirestore();
    const db = getDatabase()
    const auth = getAuth();
    const { toastSuccessNotify, toastErrorNotify, toastInfoNotify } = useToastNotify()


    //! Google Sign-In setup
    // WebBrowser.maybeCompleteAuthSession();


    //! google ile girişte tetiklenen fonksiyonlar
    // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    //     clientId: '19488866224-373356afbgalc5qshi6lnennhbqnbu6s.apps.googleusercontent.com',
    //     iosClientId: '19488866224-373356afbgalc5qshi6lnennhbqnbu6s.apps.googleusercontent.com',
    // });


    //! google ile girişte çalışan kodlar
    // promptAsync fonksiyonu ile tetiklenir
    // useEffect(() => {
    //     if (response?.type === 'success') {
    //         const { id_token } = response.params;
    //         const credential = GoogleAuthProvider.credential(id_token);

    //         signInWithCredential(auth, credential)
    //             .then((userCredential) => {
    //                 const user = userCredential.user;
    //                 dispatch(fetchUserSignInData(user));
    //                 toastSuccessNotify('Sign In Success');
    //             })
    //             .catch((error) => {
    //                 toastErrorNotify(authErrorMessage(error));
    //                 dispatch(fetchFail());
    //             });
    //     }
    // }, [response]);


    //! google ile giriş
    // const googleSign = () => {
    //     promptAsync();
    //     //? 'promptAsync' fonksiyonu, 'expo-auth-session 'kütüphanesi tarafından sağlanan bir fonksiyondur ve kullanıcıyı bir kimlik doğrulama akışına yönlendirmek için kullanılır. Bu, kullanıcıyı tarayıcıda bir kimlik doğrulama sayfasına yönlendirir ve kullanıcı kimlik bilgilerini girdikten sonra uygulamaya geri döner.
    // }



    //! register işlemi
    const singUp = async (address, info) => {

        // Redux State işlemini başlat
        dispatch(fetchStart());

        try {
            // Kullanıcı oluşturma işlemi
            const userCredential = await createUserWithEmailAndPassword(auth, info.email, info.password);
            const user = userCredential.user;

            // Veritabanına kayıt edilecek kullanıcı verilerini belirleme
            const combinedData = {
                namesurname: info.namesurname,
                username: info.username,
                email: info.email,
                notification: info.notification,
                gdpr: info.gdpr,
                isActive: info.isActive,
                defaultBalance: info.defaultBalance
            };

            // Redux store'a kullanıcı verilerini gönderme
            dispatch(fetchUserSignUpData(user));

            toastSuccessNotify('Sign Up Success');

            // kullanıcı parola bilgisini real time veri tabanına ekleme
            delete info.password
            
            // Realtime Database'e kayıt etme
            await set(ref(db, `${address}/` + user.uid), info);


        } catch (error) {
            // Hata mesajını handle etme
            toastErrorNotify(authErrorMessage(error));
            dispatch(fetchFail());
        }
    };


    //! normal login işlemi
    const signIn = async (info) => {

        // State işlemini başlat
        dispatch(fetchStart());

        try {
            // Kullanıcı giriş işlemi
            const userCredential = await signInWithEmailAndPassword(auth, info.email, info.password);
            const user = userCredential.user;

            // Redux store'a kullanıcı verilerini gönderme
            dispatch(fetchUserSignInData(user));
            toastSuccessNotify('Sign In Success');

        } catch (error) {
            console.log("error code:", error.message);

            // Hata mesajını handle etme
            toastErrorNotify(authErrorMessage(error));
            dispatch(fetchFail());
        }
    };


    //! Kullanıcı verisini Realtime database den çekme
    const getUser = async (params, id) => {
        try {

            const countRef = ref(db, `${params}/` + id)

            onValue(countRef, (snapshot) => {
                const res = snapshot.val()

                if (res) {
                    dispatch(fetchUserInfo(res || []))
                }
            })

        } catch (error) {
            console.log("hata oluştu")
        }
    }


    //! parola resetleme işlemi
    const passwordReset = async (info) => {
        try {
            await sendPasswordResetEmail(auth, info.email);
            toastInfoNotify('Password reset email sent successfully.');
        } catch (error) {
            toastErrorNotify(error.message);
            console.error("Error sending password reset email:", error);
        }
    };


    //! uygulamadan çık
    const signOut = () => {
        try {
            dispatch(fetchLogOut())
        } catch (error) {
            toastErrorNotify(error.message);
        }
    }



    const userNameCheck = async (params,info) => {

        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, params));
        // console.log("snap : ",snapshot)
        if (snapshot.exists()) {
            const users = snapshot.val();
            // console.log("users : ",users)
            for (const userId in users) {
                if (users[userId].username === info.username) {
                    return true;
                }
            }
        }
        return false;
    }




    return {

        singUp,
        signIn,
        passwordReset,
        getUser,
        signOut,
        userNameCheck
    }




}



export default useAuthCall