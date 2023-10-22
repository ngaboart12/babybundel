import { createSlice } from '@reduxjs/toolkit'

const wishSlice = createSlice({
    name: 'wish',
    initialState:{
        wish: []
    },
    reducers:{
        addToWish: (state,action)=>{
            const itemInWish = state.wish.find((item)=> item._id ===action.payload._id);
            if(itemInWish){
                const removeFromWish = state.wish.filter((item)=> item._id !== action.payload._id);
                state.wish = removeFromWish;

            }else{
                state.wish.push({...action.payload})
            }
        },
        removeToWish: (state,action)=>{
            const removeFromWish = state.wish.filter((item)=> item._id !== action.payload._id);
                state.wish = removeFromWish;

        }
        
    }
})

export const {addToWish,removeToWish} = wishSlice.actions
export default wishSlice.reducer