import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false,
    userData: [],
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
            state.userData = payload?.createdUser || []
            state.token = payload?.user?.stsTokenManager?.accessToken || ""
        },
        fetchUserSignInData: (state, { payload }) => {
            state.loading = false
            state.userData = payload || []
            state.token = payload?.stsTokenManager?.accessToken || ""
        }

    }
})

export const
    {

        fetchStart,
        fetchFail,
        fetchUserSignUpData,
        fetchUserSignInData

    } = authSlice.actions

export default authSlice.reducer
