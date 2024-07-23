import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux";
import axios from "axios"
import useToastNotify from "../helper/ToastNotify";
import { fetchFixturesData, fetchStart } from "../features/userSlice";



const useSportCall = () => {


  const navigate = useNavigation()
  const currentDate = new Date()
  const dispatch = useDispatch()
  const { toastSuccessNotify, toastErrorNotify, toastInfoNotify } = useToastNotify()

  // get fixtures
  const getFixtures = async (params) => {

    dispatch(fetchStart())

    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
      params: {
        date: params.formattedDate,
        season: params.currentYear
      },
      headers: {
        'x-rapidapi-key': 'b2300c2ef5mshd401bcc7eb55f23p183fecjsn4aa27e895b83',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
      }
    };

    try {

      const response = await axios.request(options);

      dispatch(fetchFixturesData(response?.data || []))

    } 
    catch (error) {
      // console.error(error);
      toastInfoNotify('Something went wrong !')
    }

  }


  //favorileri db ye gönder
  const postFavoriteData=async(params)=>{

    try {
      
    } 
    catch (error) {

    }
  }

  return {
    getFixtures,
    postFavoriteData
  }


}

export default useSportCall