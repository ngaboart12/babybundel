import { apiSlice } from "./apiSlice";
const USER_URL ='api/auth'
const GET_URL = 'api/user'
const PRODUCT_URL = 'api/user'
const CATE_URL = 'api/cate'

export const userApiSlice = apiSlice.injectEndpoints({
   
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/register`,
                method:'POST',
                body:data
            }),
        }),
        getuser: builder.query({
            query: ()=> ({
                url: `${GET_URL}/allUser`,
                method:'GET'
            }),
        }),
        product: builder.query({
            query: ()=>({
                url: `${PRODUCT_URL}/allproduct`,
                method: 'GET'
            }),
        }),
        singelproduct: builder.query({
            query: (data)=>({
                url: `${PRODUCT_URL}/product/${data}`,
                method: 'GET'
            }),
        }),
        productcategory: builder.query({
            query: (data)=>({
                url: `${PRODUCT_URL}/cateProduct/${data}`,
                method: 'GET'
            }),
        }),
        category: builder.query({
            query: ()=>({
                url: `${CATE_URL}/getCategory`,
                method: 'GET'
            })
        })

        
   
 
       
        }),
        overrideExisting: true
        
       

    })


export const {
    useLoginMutation,useRegisterMutation,
    useGetuserQuery,useProductQuery,useSingelproductQuery,
    useProductcategoryQuery,useCategoryQuery
} = userApiSlice