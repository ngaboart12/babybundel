import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { Path, Svg } from 'react-native-svg'
import { removeToWish } from '../redux/Slices/wishSlice'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

const FavScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isEmpty,setIsEmpty] = useState('')
    const wish = useSelector((state)=> state.wish.wish)

    return (
      <View style={{padding:40}}>
           <View style={{gap:20}}>
      <View style={{gap:30}}>
       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
             <TouchableOpacity onPress={()=>navigation.goBack()}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
             <Text style={{fontSize:20,fontWeight:700}}>Favorite product</Text>
             <Text></Text>
         </View>
       <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
         <View style={{display:'flex',flexDirection:'row',gap:5}}>
             
             <Text style={{fontSize:16,fontWeight:400}}>Select All Product (4)</Text>
         </View>
             <Text>Delete</Text>
         </View>
         
 
       </View>
       <View>
     {wish.length==0 ? <Text style={{fontFamily:'Red-Hat',fontSize:30,textAlign:'center',alignItems:'center',justifyContent:'center',marginTop:40}}>Wish list is empty</Text> : ''}
       <FlatList 
         
         data={wish}
        renderItem={({item,index})=>{
          return(

            
            <View key={index} style={{display:'flex',flexDirection:'row',gap:10,marginBottom:10}} >
           <View>
             <Image source={{uri:`${item.image}`}} style={{width:100,height:100}} />
           </View>
           <View style={{flex:1,display:'flex',flexDirection:'column',justifyContent:'space-between',padding:6}}>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
               <Text>{item.name}</Text>
               <TouchableOpacity onPress={()=>dispatch(removeToWish(item))}>
                 <Svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                   <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.5385 5.03999C12.8482 5.06549 13.0792 5.33624 13.0544 5.64599C13.0499 5.69699 12.6435 10.7302 12.4095 12.8415C12.264 14.1517 11.3984 14.949 10.0919 14.973C9.0922 14.9902 8.1277 15 7.18495 15C6.1687 15 5.17795 14.9887 4.1977 14.9685C2.9437 14.9437 2.07595 14.1307 1.9342 12.8467C1.69795 10.7167 1.2937 5.69624 1.28995 5.64599C1.26445 5.33624 1.49545 5.06474 1.8052 5.03999C2.11045 5.03174 2.38645 5.24624 2.4112 5.55524C2.41359 5.58779 2.57886 7.63801 2.75895 9.66652L2.79512 10.0713C2.88582 11.0796 2.97777 12.0485 3.05245 12.723C3.1327 13.4527 3.52645 13.8292 4.22095 13.8435C6.09595 13.8832 8.0092 13.8855 10.0717 13.848C10.8097 13.8337 11.2087 13.4647 11.2912 12.7177C11.5237 10.6222 11.9287 5.60624 11.9332 5.55524C11.9579 5.24624 12.2317 5.03024 12.5385 5.03999ZM8.75905 0.000213623C9.44755 0.000213623 10.0528 0.464464 10.2305 1.12971L10.4211 2.07546C10.4826 2.38549 10.7547 2.61191 11.0697 2.61688L13.531 2.61696C13.8415 2.61696 14.0935 2.86896 14.0935 3.17946C14.0935 3.48996 13.8415 3.74196 13.531 3.74196L11.0917 3.74185C11.0879 3.74193 11.0841 3.74196 11.0803 3.74196L11.062 3.74121L3.28121 3.74187C3.27517 3.74193 3.26911 3.74196 3.26305 3.74196L3.2515 3.74121L0.8125 3.74196C0.502 3.74196 0.25 3.48996 0.25 3.17946C0.25 2.86896 0.502 2.61696 0.8125 2.61696L3.27325 2.61621L3.34902 2.61142C3.63123 2.5748 3.86578 2.36046 3.92305 2.07546L4.1053 1.16346C4.29055 0.464464 4.8958 0.000213623 5.5843 0.000213623H8.75905ZM8.75905 1.12521H5.5843C5.4043 1.12521 5.24605 1.24596 5.2003 1.41921L5.02555 2.29671C5.00334 2.40786 4.971 2.51497 4.92961 2.61717H9.41396C9.37252 2.51497 9.34011 2.40786 9.3178 2.29671L9.13555 1.38471C9.0973 1.24596 8.93905 1.12521 8.75905 1.12521Z" fill="black"/>
                 </Svg>
               </TouchableOpacity>
             </View>
 
             <Text>{item.price} frw</Text>
             
 
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
               <Text>{item.countInStock}</Text>
             </View>
           </View> 
         </View>
        )
        }} />
      </View>
      </View>
      </View>
    )
}

export default FavScreen