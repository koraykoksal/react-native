import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false
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
        }

    }
})

export const
    {

        fetchStart,
        fetchFail

    } = authSlice.actions

export default authSlice.reducer
