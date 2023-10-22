import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  cartReducer  from './Slices/cartSlice'
import { apiSlice } from "./apiSlice/apiSlice";
import wishSlice from './Slices/wishSlice';
import userSlice from './Slices/userSlice';
import skipSlice from './Slices/skipSlice';
import notSlice from './Slices/notSlice';





const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
const reducer = combineReducers({
    cart: cartReducer,
    wish: wishSlice,
    user: userSlice,
    skip: skipSlice,
    not:notSlice,
   
    [apiSlice.reducerPath]: apiSlice.reducer,

})
const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
    reducer: persistedReducer,
  
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false,immutableCheck: false,}).concat(apiSlice.middleware),
    devTools:true
})

const persistor = persistStore(store);
export {persistor}