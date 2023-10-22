import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 const baseQuery = fetchBaseQuery({baseUrl:'http://192.168.1.66:6000'})
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder)=>({})
 })