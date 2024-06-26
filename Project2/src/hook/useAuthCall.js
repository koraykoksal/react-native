import { useNavigation } from "@react-navigation/native"
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { getDatabase, onValue, ref, remove, set, update } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPhoneNumber, PhoneAuthProvider, GoogleAuthProvider, RecaptchaVerifier ,sendPasswordResetEmail} from 'firebase/auth';
import { format } from "date-fns"
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, fetchUserSignInData, fetchUserSignUpData } from "../features/authSlice.js";
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

        dispatch(fetchStart())

        createUserWithEmailAndPassword(auth, info.email, info.password)
            .then((userCredential) => {

                const user = userCredential.user;

                // Realtime database
                return set(ref(db, `${address}/` + user.uid), info)
                    .then(() => {

                        // Firestore database (Eğer kullanıyorsanız)
                        // return setDoc(doc(firestore, 'users', user.uid), {
                        //   email: user.email,
                        //   namesurname: info.namesurname,
                        //   username: info.username,
                        //   notification: info.notification,
                        //   gdpr: info.gdpr,
                        //   createdAt: format(currentDate, "yyyy-MM-dd HH:mm"),
                        // });

                        // Realtime Database işlemi başarılı olduysa combinedData oluşturulur
                        const combinedData = { user, createdUser: info }; // createdUser yerine info kullanılır
                        dispatch(fetchUserSignUpData(combinedData));

                    })
            })
            .then(() => {
                toastSuccessNotify('Sign Up Success');
            })
            .catch((error) => {
                //? burada gelen hata mesajını authErrorMessage fonksiyonuna gönder ve return al
                toastErrorNotify(authErrorMessage(error));
                dispatch(fetchFail())
            });
    }



    //! normal login işlemi
    const signIn = (info) => {

        dispatch(fetchStart())

        signInWithEmailAndPassword(auth, info.email, info.password)
            .then((userCredential) => {

                const user = userCredential.user;
                dispatch(fetchUserSignInData(user))
                toastSuccessNotify('Sign In Success')
            })
            .catch((error) => {
                console.log("error code : ", error.message)
                //? burada gelen hata mesajını authErrorMessage fonksiyonuna gönder ve return al
                toastErrorNotify(authErrorMessage(error))
                dispatch(fetchFail())
            });

    }


    //! parola resetleme işlemi
    const passwordReset=(info)=>{

        sendPasswordResetEmail(auth, info.email)
            .then(() => {
                // setSuccess('Password reset email sent successfully.');
                toastInfoNotify('Password reset email sent successfully.')
            })
            .catch((error) => {
                toastErrorNotify(error.message)
                toast.show(error.message, { type: 'danger' });
            });
    }

    return {

        singUp,
        signIn,
        passwordReset
        // googleSign
    }




}



export default useAuthCall