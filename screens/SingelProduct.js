import { View, Text, Image, TouchableOpacity,ActivityIndicator, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useSingelproductQuery } from '../redux/apiSlice/userApiAlice';
import { Path, Svg } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Slices/cartSlice';
import { addToWish } from '../redux/Slices/wishSlice';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'expo-status-bar';


const SingelProduct = ({route}) => {
  const navigation = useNavigation()
  const [visibel,setVisible] = useState(false)
  const dispatch = useDispatch()
  const {id} = route.params;
  const {data:singelProduct,isLoading} = useSingelproductQuery(id)
  const {userInfo} = useSelector((state)=> state.user)
  const LoginCheck = ()=>{
    if (userInfo !==null){
      navigation.navigate('momopay',{id:singelProduct._id})
      
    } 
    else{
      navigation.navigate('login')

    }
  }

  const [Fontsloaded]= useFonts({
    "indieflower": require('../assets/fonts/IndieFlower-Regular.ttf'),
    "outfit": require('../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf'),
    
})
if(!Fontsloaded){
    return undefined;
}

  return (
    <View style={{paddingTop:40,height:'100%'}} >
      <StatusBar style='dark'/>
     
      {isLoading ?  <ActivityIndicator style={{position:'absolute',left:150,bottom:310,alignItems:'center'}} color='orange' size={60}/>:
      <View style={{height:'100%'}}>
        <Image source={{uri:`${singelProduct.image}`}}  style={{width:'100%',height:'60%'}}/>
        <View style={{padding:20}}>
          <Text style={{fontSize:30,fontWeight:600,fontFamily:'Red-Hat'}}>{singelProduct.name}</Text>
        </View>
        <View style={{position:'absolute',right:10,top:50}}>
          <TouchableOpacity onPress={()=> dispatch(addToWish(singelProduct))}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
             <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.9978 1.70512C18.5393 0.0182442 21.9155 -0.447781 24.8321 0.533497C31.1766 2.68148 33.146 9.9426 31.3844 15.7203C28.6663 24.7947 17.0575 31.5635 16.5652 31.8474C16.3901 31.9491 16.1963 32 16.0025 32C15.8086 32 15.6164 31.9508 15.4413 31.8507C14.9521 31.5701 3.4277 24.9013 0.618901 15.722C0.617338 15.722 0.617338 15.7203 0.617338 15.7203C-1.14578 9.94096 0.817409 2.67819 7.15558 0.533497C10.1316 -0.477317 13.375 -0.0326247 15.9978 1.70512ZM7.87459 2.87675C2.74621 4.61285 1.45826 10.4037 2.85094 14.9704C5.04234 22.1282 13.7001 27.9157 16.0009 29.3483C18.3095 27.901 27.0298 22.0494 29.1508 14.977C30.5435 10.4053 29.2509 4.61449 24.1147 2.87675C21.6263 2.03823 18.7237 2.54856 16.7199 4.17636C16.301 4.5144 15.7195 4.52096 15.2975 4.18621C13.1749 2.51082 10.402 2.02018 7.87459 2.87675ZM22.6142 6.13547C24.7446 6.85912 26.2373 8.83973 26.4202 11.1813C26.4718 11.859 25.9919 12.4531 25.3464 12.5072C25.3136 12.5105 25.2823 12.5121 25.2495 12.5121C24.6446 12.5121 24.1319 12.0248 24.0819 11.3815C23.9787 10.0327 23.119 8.89388 21.8952 8.47872C21.2778 8.26868 20.9401 7.57457 21.1386 6.92968C21.3403 6.28316 21.9952 5.932 22.6142 6.13547Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
          </View>
        <View style={{paddingHorizontal:20,gap:5}}>
          <Text style={{fontSize:20,fontFamily:'outfit'}}>{singelProduct.price}$</Text>
          <Text>Description</Text>
          <Text style={{color:'#656565',fontFamily:'Red-Hat',fontSize:16}}>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Ipsa provident doloribus minima, ullam soluta 
             assumenda quis exercitationem omnis doloremque
             libero inventore amet fuga magnam
          </Text>
          <View style={{display:'flex',flexDirection:'row'}}>
            <Text>Orders:</Text>
             <Text>800</Text>
           
          </View>
        </View>
        <View style={{position:'absolute',bottom:0,display:'flex',flexDirection:'row',flex:1}}>
          <TouchableOpacity onPress={()=>dispatch(addToCart(singelProduct))}
           style={{width:'50%',backgroundColor:'white',height:60,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#FFB648',fontSize:18}}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setVisible(true)}
          style={{width:'50%',backgroundColor:'#FFB648',height:60,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:20,fontFamily:'Red-Hat'}}>check it out</Text>
          </TouchableOpacity>
        </View>

      </View>
       }
     <Modal
        isVisible={visibel}
      
       style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={1000}
      animationOutTiming={1000}
      
      
      
    >
    <Pressable onPress={()=> setVisible(false)} style={{backgroundColor:'transparent',width:'100%',height:'100%'}}>

      <Pressable onPress={()=>setVisible(true)} style={{ backgroundColor: 'white',gap:10 ,padding: 20, minHeight: 300, width: '100%',position:'absolute',bottom:0 }}>
        <View style={{gap:10}}>
          <Text style={{fontSize:18,fontFamily:'Red-Hat',color:'#979393'}}>Colors</Text>
          <View style={{display:'flex',flexDirection:'row',gap:4}}>
            <View style={{height:50,width:50,backgroundColor:'#005E7C'}}></View>
            <View style={{height:50,width:50,backgroundColor:'white'}}></View>
            <View style={{height:50,width:50,backgroundColor:'#000000'}}></View>
            <View style={{height:50,width:50,backgroundColor:'#FFB648'}}></View>
          </View>
        </View>
        <View style={{gap:10}}>
          <Text style={{fontSize:18,fontFamily:'Red-Hat',color:'#979393'}}>Colors</Text>
          <View style={{display:'flex',flexDirection:'row',gap:10}}>
            <View style={{height:50,width:50,borderColor:'lightgray',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>ML</Text>
            </View>
            <View style={{height:50,width:50,borderColor:'lightgray',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>XL</Text>
            </View>
            <View style={{height:50,width:50,borderColor:'lightgray',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>L</Text>
            </View>
            <View style={{height:50,width:50,borderColor:'lightgray',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>SM</Text>
            </View>
             
          </View>
        </View>
        <View style={{gap:10}}>
          <Text style={{fontSize:18,fontFamily:'Red-Hat',color:'#979393'}}>Amount</Text>
          <View style={{display:'flex',flexDirection:'row',gap:4,alignItems:'center'}}>
            <TouchableOpacity>
              <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.99992 1.33333C11.6759 1.33333 14.6666 4.32399 14.6666 7.99999C14.6666 11.676 11.6759 14.6667 7.99992 14.6667C4.32392 14.6667 1.33325 11.676 1.33325 7.99999C1.33325 4.32399 4.32392 1.33333 7.99992 1.33333ZM7.99992 2.33333C4.87525 2.33333 2.33325 4.87533 2.33325 7.99999C2.33325 11.1247 4.87525 13.6667 7.99992 13.6667C11.1246 13.6667 13.6666 11.1247 13.6666 7.99999C13.6666 4.87533 11.1246 2.33333 7.99992 2.33333ZM9.31552 5.33313C9.51085 5.52913 9.50952 5.84579 9.31419 6.04046L7.34618 7.99979L9.31419 9.95979C9.50952 10.1545 9.51085 10.4705 9.31552 10.6665C9.21818 10.7651 9.08952 10.8138 8.96152 10.8138C8.83418 10.8138 8.70618 10.7651 8.60885 10.6678L6.28418 8.35446C6.19019 8.26046 6.13752 8.13313 6.13752 7.99979C6.13752 7.86713 6.19019 7.73979 6.28418 7.64579L8.60885 5.33179C8.80418 5.13713 9.12018 5.13713 9.31552 5.33313Z" fill="black"/>
              </Svg>
            </TouchableOpacity>
            <View style={{height:30,width:30,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>2</Text>
            </View>
            <TouchableOpacity>
              <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.99992 0.333328C10.6759 0.333328 13.6666 3.32399 13.6666 6.99999C13.6666 10.676 10.6759 13.6667 6.99992 13.6667C3.32392 13.6667 0.333252 10.676 0.333252 6.99999C0.333252 3.32399 3.32392 0.333328 6.99992 0.333328ZM6.99992 1.33333C3.87525 1.33333 1.33325 3.87533 1.33325 6.99999C1.33325 10.1247 3.87525 12.6667 6.99992 12.6667C10.1246 12.6667 12.6666 10.1247 12.6666 6.99999C12.6666 3.87533 10.1246 1.33333 6.99992 1.33333ZM6.39165 4.33179L8.71565 6.64579C8.80965 6.73979 8.86232 6.86713 8.86232 6.99979C8.86232 7.13313 8.80965 7.26046 8.71565 7.35446L6.39165 9.66779C6.29432 9.76513 6.16632 9.81379 6.03899 9.81379C5.91099 9.81379 5.78232 9.76513 5.68499 9.66646C5.49032 9.47046 5.49098 9.15446 5.68632 8.95979L7.65432 6.99979L5.68632 5.04046C5.49098 4.84579 5.49032 4.52913 5.68499 4.33313C5.87965 4.13646 6.19565 4.13779 6.39165 4.33179Z" fill="black"/>
              </Svg>
            </TouchableOpacity>
           
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={LoginCheck} style={{backgroundColor:'#FFB648',height:60,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:24,color:'white',fontFamily:'Red-Hat'}}>Confirm</Text>
          </TouchableOpacity>
        </View>
        
      </Pressable>
    </Pressable>
    </Modal>
       
     
     

    </View>
  )
}

export default SingelProduct