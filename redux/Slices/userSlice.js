import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState:{
        userInfo: null,

    },
    reducers:{
        addUser: (state,action)=>{
            state.userInfo = action.payload
        },
        logout: (state,action)=>{
            state.userInfo= null
        },
     
    }
})

export const { addUser, logout } = userSlice.actions
export default userSlice.reducer