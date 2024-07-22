import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: false,
    fixturesData:[]
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
        },
        fetchFixturesData:(state,{payload})=>{
            state.loading=false,
            state.fixturesData=payload
        }

    }
})

export const
    {

        fetchStart,
        fetchFail,
        fetchFixturesData

    } = userSlice.actions

export default userSlice.reducer
