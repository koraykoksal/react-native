import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false,
    userData:[],
    token:""
}



export const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {

        fetchStart: (state) => {
            state.loading = true
            state.error = false
        },
        fetchFail: (state) => {
            state.loading = false
            state.error = true
        },
        fetchUserSignUpData:(state,{payload})=>{
            state.loading=false
            state.userData=payload
            state.token=payload?.user?.stsTokenManager?.accessToken
        }

    }
})

export const
    {

        fetchStart,
        fetchFail,
        fetchUserSignUpData

    } = authSlice.actions

export default authSlice.reducer
