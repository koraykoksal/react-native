import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false,
    userData: [],
    userInfo:[],
    token: ""
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
        fetchUserSignUpData: (state, { payload }) => {
            state.loading = false
            state.userData = payload || []
            state.token = payload?.stsTokenManager?.accessToken || ""
        },
        fetchUserSignInData: (state, { payload }) => {
            state.loading = false
            state.userData = payload || []
            state.token = payload?.stsTokenManager?.accessToken || ""
        },
        fetchUserInfo:(state,{payload})=>{
            state.userInfo=payload
        },
        fetchLogOut:(state)=>{
            state.loading=false,
            state.token=""
            state.userData=[]
            state.userInfo=[]
        }

    }
})

export const
    {

        fetchStart,
        fetchFail,
        fetchUserSignUpData,
        fetchUserSignInData,
        fetchUserInfo,
        fetchLogOut

    } = authSlice.actions

export default authSlice.reducer
