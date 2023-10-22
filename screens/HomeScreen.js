import { View, Text, TouchableOpacity, ImageBackground, FlatList, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

import { TextInput } from 'react-native-gesture-handler';
import Svg, { Path,Rect } from "react-native-svg"
import { useGetuserQuery} from '../redux/apiSlice/userApiAlice';
import { useDispatch, useSelector } from 'react-redux';
import HotSales from '../component/HotSales';
import Product from '../component/Product'
import { useFonts } from 'expo-font';
import { logout } from '../redux/Slices/userSlice';
import axios from 'axios';
import io  from 'socket.io-client';
import { addToNot } from '../redux/Slices/notSlice';

const HomeScreen = ({navigation}) => {
  const [not,setNot] = useState('')

 

  const [value,setValue] = useState('')
  
  const dispatch = useDispatch()
  const handelLogout = ()=>{
    dispatch(logout())
    navigation.navigate('onboard')
     
  }
  const cart = useSelector((state)=> state.cart.cart)
  const {data:allData, isFetching} = useGetuserQuery()
  const [category,setCategory]= useState()
  const [allProduct,setProduct]= useState()
  const getCate = async()=>{
    await axios.get('http://192.168.1.66:6000/api/cate/getCategory').then((response)=>{
      setCategory(response.data)
     
 })
}

  const getProduct = async()=>{
    await axios.get('http://192.168.1.66:6000/api/user/allproduct').then((response)=>{
      setProduct(response.data)
 })
  }
  
  useEffect(()=>{
    getCate()

  },[])
  useEffect(()=>{
     getProduct()

  },[])
  const testSocket = ()=>{
    const socket = io('http://192.168.1.66:6000')
    
    socket.on('from backend', msg=>{
      dispatch(addToNot(msg))
    })
  

  }
 
  
  useEffect(()=>{
    testSocket()
  },[])
  const [Fontsloaded]= useFonts({
    "indieflower": require('../assets/fonts/IndieFlower-Regular.ttf'),
    "Outfit": require('../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf'),
    "Red-Hat": require('../assets/fonts/RedHatDisplay-Medium.ttf'),

})
if(!Fontsloaded){
    return undefined;
}


   const numColumns = 3
   const numColumns2 = 2
  return (
  <SafeAreaView style={{flex:1}}>
    <View style={styles.homeContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Rect width="24" height="24" fill="white"/>
              <Rect x="3" y="2" width="15" height="4" rx="2" fill="black"/>
              <Rect x="3" y="10" width="20" height="4" rx="2" fill="black"/>
              <Rect x="3" y="18" width="12" height="4" rx="2" fill="black"/>
            </Svg>
          </TouchableOpacity> 
        
          <View  style={{padding:20,backgroundColor:'#E7E7E7',width:'60%',borderRadius:8}}>
            <TextInput placeholder='Something' style={{height:20,textAlign:'center'}}/>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('cart')} style={{display:'flex',flexDirection:'row'}}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.7808 2.00031C14.3946 2.00031 16.5539 3.99196 16.8202 6.53923L16.8945 6.54011C18.3445 6.54011 20.1075 7.5031 20.7025 10.2041L21.4915 16.3111C21.7745 18.2821 21.4205 19.8631 20.4375 20.9971C19.4595 22.1251 17.9115 22.7221 15.9605 22.7221H7.61247C5.46947 22.7221 3.97647 22.1971 3.04747 21.1181C2.11447 20.0361 1.80247 18.4131 2.12047 16.2951L2.89647 10.2691C3.40647 7.5061 5.27147 6.54011 6.71547 6.54011C6.84013 5.39058 7.35847 4.29701 8.18077 3.47731C9.12577 2.53831 10.4288 2.00031 11.7598 2.00031H11.7808ZM16.8945 8.04011H6.71547C6.27447 8.04011 4.80047 8.2181 4.37747 10.5021L3.60547 16.5021C3.35447 18.1851 3.54847 19.4031 4.18347 20.1401C4.81047 20.8681 5.93247 21.2221 7.61247 21.2221H15.9605C17.0085 21.2221 18.4395 21.0131 19.3035 20.0151C19.9895 19.2241 20.2255 18.0461 20.0055 16.5131L19.2265 10.4611C18.8945 8.9701 18.0185 8.04011 16.8945 8.04011ZM14.6973 10.8242C15.1113 10.8242 15.4703 11.1602 15.4703 11.5742C15.4703 11.9882 15.1573 12.3242 14.7433 12.3242H14.6973C14.2833 12.3242 13.9473 11.9882 13.9473 11.5742C13.9473 11.1602 14.2833 10.8242 14.6973 10.8242ZM8.86717 10.8242C9.28117 10.8242 9.64017 11.1602 9.64017 11.5742C9.64017 11.9882 9.32617 12.3242 8.91217 12.3242H8.86717C8.45317 12.3242 8.11717 11.9882 8.11717 11.5742C8.11717 11.1602 8.45317 10.8242 8.86717 10.8242ZM11.7778 3.50031H11.7628C10.8218 3.50031 9.90477 3.87931 9.23977 4.54031C8.69807 5.07957 8.34379 5.7885 8.22918 6.53964L15.3085 6.53992C15.0515 4.82168 13.5657 3.50031 11.7778 3.50031Z" fill="black"/>
            </Svg>
            <View style={{position:'absolute',right:-8,width:20,minheight:20,backgroundColor:'orange',borderRadius:20}}>
              <Text style={{textAlign:'center',color:'white'}}>{cart.length}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handelLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
          
      </View>
      <ScrollView>
        <View style={styles.discover}>
          <ImageBackground  source={require('../assets/image/header.png')} style={styles.firstPost} >
             <View style={{padding:20,gap:10}}>
              <Text style={{fontSize:16,color:'white',fontFamily:'Red-Hat',fontWeight:200}}>Discover our amazing selection of packages for kids'</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('assist')}  style={styles.shopBtn}>
                <Text style={{fontSize:16,color:'white',fontFamily:'Red-Hat'}}>Shop Now</Text>
              </TouchableOpacity>
             </View>
  
          </ImageBackground>
  
        </View>
        <View style={styles.category}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,fontFamily:'Red-Hat',fontWeight:600}}>Categories</Text>
            <TouchableOpacity><Text style={{fontSize:14,color:'#FFB648'}}>View all</Text></TouchableOpacity>
          </View>
          <View style={styles.categoryContain}>
            <FlatList
            numColumns={numColumns}
            data={category}
            renderItem={({item,index})=>{
              return(
                <TouchableOpacity style={styles.cate} key={index}>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <Path d="M8.85961 12.4813C8.85333 12.4813 8.84079 12.475 8.83451 12.4687C7.87451 12.072 6.92079 12.1286 6.12392 12.475C5.33334 12.8214 4.68079 13.4826 4.36706 14.2508C4.04706 15.0128 4.14745 15.8693 4.56157 16.6438C5.47765 18.3378 7.73647 19.2824 9.5749 18.7408C10.3906 18.5015 11.1059 17.9537 11.4008 17.198C12.0784 15.4851 10.6227 13.2307 8.85961 12.4813ZM30.971 17.0469C28.7875 20.6804 23.4478 18.4449 20.6494 17.2673L19.1686 16.6753C17.3741 15.9889 15.6298 15.3214 15.0275 14.106C14.9459 13.9423 14.8706 13.7722 14.8078 13.6022C14.8894 14.3768 15.1467 14.9939 15.5796 15.5229C16.4141 16.5431 17.9075 17.2673 20.0282 18.1552C22.7827 19.3076 29.258 21.8391 30.7827 18.2496C30.9271 17.8844 30.9835 17.4688 30.971 17.0469ZM24.7216 6.8326C23.8369 5.15751 21.9106 4.05548 20.091 4.77967C19.2816 5.10083 18.6353 5.74316 18.309 6.51773C18.0078 7.24192 18.102 8.06058 18.491 8.79107C19.3631 10.4032 21.5153 11.3037 23.2659 10.7873C24.0439 10.5606 24.7216 10.0379 25.0039 9.32004C25.3114 8.60215 25.1671 7.67644 24.7216 6.8326ZM10.3718 26.7133C11.2376 24.547 12.4424 22.7082 14.1114 21.4424C13.8792 21.1149 13.6533 20.8064 13.4337 20.5104C13.1639 20.8001 12.9004 21.1023 12.6306 21.4172C12.4173 21.6754 12.0282 21.3479 12.2416 21.0897C12.5365 20.7371 12.8251 20.4033 13.1137 20.0948L12.4737 19.3076C12.16 19.6099 11.8526 19.9184 11.5639 20.2207C11.3318 20.46 10.9678 20.1074 11.2 19.8681C11.5012 19.5532 11.8212 19.2383 12.1475 18.9235C11.8965 18.6401 11.6518 18.3819 11.4196 18.1552C10.2965 19.5091 8.21334 19.7106 6.52549 19.0053C5.43373 18.5456 4.59294 17.7711 4.11608 16.8894C3.62667 15.9952 3.51373 14.9876 3.8902 14.0745C3.89647 14.0619 3.89647 14.0493 3.90275 14.0367C4.27922 13.1488 5.00706 12.4057 5.91687 12.0027C8.11294 11.0329 10.4784 12.305 11.5514 14.339C12.1537 15.4725 12.2855 16.7131 11.7082 17.7207C11.9655 17.9663 12.2353 18.2496 12.5114 18.5645C12.7937 18.3 13.0698 18.0418 13.3522 17.7899C13.6031 17.5695 13.942 17.9474 13.691 18.1741C13.3898 18.4386 13.1137 18.6968 12.8439 18.9487L13.4714 19.7169C13.7976 19.3895 14.1177 19.0935 14.4376 18.8227C14.6949 18.6086 15.0212 19.0053 14.7639 19.2194C14.4376 19.4902 14.1114 19.7925 13.7851 20.1263C14.0235 20.4411 14.2682 20.7812 14.5255 21.1338C15.1467 20.7182 15.818 20.3844 16.5396 20.1388C15.8871 18.8416 14.8706 17.5066 13.5718 16.3164C12.3357 15.1766 12.7749 13.4385 10.698 11.9145C8.31373 10.1639 5.42118 10.6929 3.63294 12.7962C2.65412 13.9486 1.28628 17.7018 1.22353 19.1565C1.16706 20.4852 1.40549 21.6124 2.18353 22.7207C2.9302 23.7787 4.12863 24.6981 5.84157 25.416C7.32863 26.052 8.89098 26.4991 10.3718 26.7133ZM10.5098 27.2422C10.5035 27.2422 10.4973 27.2422 10.491 27.2422C8.91608 27.0344 7.24079 26.5684 5.64079 25.9009C3.31294 24.9248 1.56863 23.4449 0.947454 21.3416C0.87216 24.4903 2.62902 26.1339 5.79138 27.4626C8.10039 28.4324 10.8612 28.9866 13.1137 28.7536C14.9522 28.5647 16.4455 27.8531 17.0604 26.4047C17.2235 26.0331 17.2737 25.6112 17.2549 25.183C15.9059 27.2989 12.9631 27.5571 10.5098 27.2422ZM16.7592 20.6174C13.9043 21.5683 12.0722 23.8858 10.8926 26.7762C13.2706 27.0281 16.1318 26.6755 17.1043 24.3706C17.5435 23.3316 17.3553 21.984 16.7592 20.6174ZM24.6086 18.1552C25.531 16.2849 26.6102 14.6665 27.8651 13.533C27.5765 13.2055 27.2941 12.8969 27.0243 12.6072C26.7922 12.9221 26.56 13.2559 26.3278 13.6022C26.1459 13.8793 25.7192 13.5959 25.9075 13.3188C26.1584 12.941 26.4157 12.5758 26.6667 12.2357L25.9451 11.5241C25.6627 11.8642 25.3929 12.2042 25.1357 12.5317C24.9286 12.7962 24.5271 12.4876 24.7341 12.2231C25.0039 11.8705 25.2863 11.5241 25.5686 11.1778C25.2988 10.9322 25.0353 10.7117 24.7843 10.5165C24.4078 10.8692 23.9373 11.1274 23.4102 11.2848C21.4275 11.8642 19.0306 10.8629 18.0455 9.03666C17.5812 8.17393 17.4745 7.20414 17.8384 6.32251C18.6165 4.4585 20.8314 3.50761 22.7702 4.35145C23.818 4.79226 24.6714 5.6424 25.1733 6.5933C25.8071 7.79609 25.8949 9.10593 25.1294 10.1324C25.3741 10.3276 25.6314 10.5417 25.9012 10.7873C26.1459 10.4976 26.3969 10.2143 26.6541 9.92458C26.88 9.67269 27.2565 10.0127 27.0306 10.2646C26.7733 10.5543 26.5161 10.844 26.2776 11.1274L26.9867 11.8264C27.269 11.4674 27.5576 11.1337 27.8463 10.8314C28.0784 10.5921 28.4486 10.9447 28.2102 11.1903C27.9153 11.4926 27.6267 11.8327 27.338 12.1979C27.6329 12.5065 27.9404 12.8465 28.2541 13.1992C28.8502 12.7269 29.4651 12.3742 30.0988 12.1412C29.302 10.8314 28.0659 9.44599 26.5537 8.06058C26.4596 7.97871 26.4471 7.81498 26.4031 7.64495C25.9765 6.03913 25.0416 4.83634 23.8745 4.11215C22.651 3.35018 21.1702 3.11717 19.771 3.48872C19.0494 3.67764 18.1396 4.27588 17.3176 5.20789C16.6275 5.99505 16.0063 7.01522 15.6298 8.22431C15.0588 10.0442 14.5882 12.1098 15.4729 13.8856C16.1318 15.208 18.8988 15.9826 20.6933 16.7383C21.7663 17.1854 23.1529 17.7773 24.6086 18.1552ZM30.3561 12.5946C28.0408 13.3818 26.3278 15.8693 25.1231 18.2748C27.4447 18.7849 29.7914 18.6212 30.8267 16.2219C31.2847 15.1388 31.04 13.8919 30.3561 12.5946Z" fill="#FFB648"/>
                  </Svg>
                  <Text style={{fontSize:14,fontFamily:'Outfit',color:'black'}}>{item.name}</Text>

                </TouchableOpacity>
              )
            }}
          scrollEnabled={false}
            
            />
          </View>

        </View>
        <View style={styles.hotsale}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,fontFamily:'Outfit',fontWeight:600}}>Hote sales</Text>
            <TouchableOpacity><Text style={{fontSize:14,color:'#FFB648'}}>View all</Text></TouchableOpacity>
          </View>
          <View style={{width:'100%',alignItems:'center',justifyContent:'space-between'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {allProduct?.map((item,index)=>(
                <HotSales  data={item} key={index}/>
        
               ))}
            </ScrollView>
          </View>

        </View>
        <View style={styles.allproduct}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:16,fontFamily:'Outfit',fontWeight:600}}>Products</Text>
            <TouchableOpacity><Text style={{fontSize:14,color:'#FFB648'}}></Text></TouchableOpacity>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>

            {!allProduct ? <Text>Loading....</Text> :
              
              <FlatList
              numColumns={numColumns2}
              data={allProduct}
              renderItem={({item,index})=>{
                return(
                  <Product data={item} key={index}/>
                  )
                  
                }}
                scrollEnabled={false}
                
                />
                
              }

            </View>
        </View>
      </ScrollView>

    </View>

  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    gap:4,
    paddingTop:20,
  },
  navbar:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    padding:10,
    marginTop:10,
    alignItems:'center',
    width:'100%'
  },
  discover:{
    height:140,
    paddingHorizontal:30,
    paddingTop:10,
    
  },
  firstPost:{
    width:'100%',height:'100%',objectFit:'cover'

  },
  shopBtn:{
    height:36,
    width:120,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFB648'
  },
  category:{
    padding:30,
    gap:10
  },
  categoryContain:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    gap:20

  },
  cate:{
    width:'30%',marginRight:15,marginBottom:10,justifyContent:'center',alignItems:'center'
  },
  hotsale:{
    paddingHorizontal:30,
    gap:20
  },
  allproduct:{
    padding:30

  }

})

export default HomeScreen