import { createSlice } from "@reduxjs/toolkit";

const skipSlice = createSlice({
    name:'skip',
    initialState:{
        skip: null
    },
    reducers:{
        skipLogin: (state,action)=>{
            state.skip= 'skip'
        },
        skipLogin: (state,action)=>{
            state.skip= 'skip'
        },
        skipLogout: (state,action)=>{
            state.skip= null
        },
        
    }
})
export const {skipLogin,skipLogout } = skipSlice.actions
export default skipSlice.reducer