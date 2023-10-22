import { createSlice } from "@reduxjs/toolkit";


const notSlice = createSlice({
    name: 'not',
    initialState:{
        noti: []
    },
    reducers: {
        addToNot: (state,action)=>{
            state.noti.push({...action.payload,read:false})
        },
        removeAll: (state)=>{
            state.noti=[]
        },
        readAll: (state)=>{
            state.noti.map((item)=>{
                item.read=true
            })


        }
    }
})

export const {addToNot,removeAll,readAll} = notSlice.actions
export default notSlice.reducer