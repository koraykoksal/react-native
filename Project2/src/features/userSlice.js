import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false
}



export const userSlice = createSlice({

    name: "user",
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

    } = userSlice.actions

export default userSlice.reducer
