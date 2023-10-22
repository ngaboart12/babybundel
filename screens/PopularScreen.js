import { View, Text, TouchableOpacity , FlatList, Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Path, Svg } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons';
import { useProductcategoryQuery } from '../redux/apiSlice/userApiAlice';
import { useFonts } from 'expo-font';

const PopularScreen = ({navigation,route}) => {
  const {id} = route.params
  const [ckeckCate,setCheckCate] = useState(false)
    const {data:productCategory,isLoading} = useProductcategoryQuery(id)
  
    const [Fontsloaded]= useFonts({
      "indieflower": require('../assets/fonts/IndieFlower-Regular.ttf'),
      "outfit": require('../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf'),
      
  })
  if(!Fontsloaded){
      return undefined;
  }
      
  return (
    <View style={{padding:40,paddingTop:60,gap:20}}>
      
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}><AntDesign name="arrowleft" size={24} color="black" /></TouchableOpacity>
            <Text style={{fontSize:18,fontWeight:700,fontFamily:'monospace'}}>Most Popular roduct</Text>
            <Text></Text>
        </View>
        
    <ScrollView>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Text>New arrival</Text>
            <Text> <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.4899 11.4233C15.9199 11.4233 17.0833 12.5808 17.0833 14.0033C17.0833 15.4258 15.9199 16.5833 14.4899 16.5833C13.0591 16.5833 11.8949 15.4258 11.8949 14.0033C11.8949 12.5808 13.0591 11.4233 14.4899 11.4233ZM14.4899 12.6733C13.7483 12.6733 13.1449 13.27 13.1449 14.0033C13.1449 14.7375 13.7483 15.3333 14.4899 15.3333C15.2308 15.3333 15.8333 14.7375 15.8333 14.0033C15.8333 13.27 15.2308 12.6733 14.4899 12.6733ZM8.40025 13.4107C8.74525 13.4107 9.02525 13.6907 9.02525 14.0357C9.02525 14.3807 8.74525 14.6607 8.40025 14.6607H3.14942C2.80442 14.6607 2.52442 14.3807 2.52442 14.0357C2.52442 13.6907 2.80442 13.4107 3.14942 13.4107H8.40025ZM5.09417 3.33334C6.525 3.33334 7.68833 4.49168 7.68833 5.91418C7.68833 7.33668 6.525 8.49334 5.09417 8.49334C3.66417 8.49334 2.5 7.33668 2.5 5.91418C2.5 4.49168 3.66417 3.33334 5.09417 3.33334ZM5.09417 4.58334C4.35333 4.58334 3.75 5.18001 3.75 5.91418C3.75 6.64751 4.35333 7.24334 5.09417 7.24334C5.83583 7.24334 6.43833 6.64751 6.43833 5.91418C6.43833 5.18001 5.83583 4.58334 5.09417 4.58334ZM15.9926 5.33368C16.3376 5.33368 16.6176 5.61368 16.6176 5.95868C16.6176 6.30368 16.3376 6.58368 15.9926 6.58368H10.7426C10.3976 6.58368 10.1176 6.30368 10.1176 5.95868C10.1176 5.61368 10.3976 5.33368 10.7426 5.33368H15.9926Z" fill="#FFB648"/>
</Svg> Filter</Text>
        </View>
     
        {isLoading  ? <Text>Loading.........</Text>:
     
        
    <FlatList 
        data={productCategory}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index)=> index.toString()}
        renderItem={({item})=>{
          return <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <TouchableOpacity style={{width:140,height:140,gap:10,marginTop:0,alignItems:'center',display:'flex',flexDirection:'row'}}>
            <Image source={{uri:`http://192.168.1.65:4000/profile/${item.image}`}} style={{height:100,width:80}}/>
           <View style={{gap:10}}>
            <Text style={{fontSize:20}}>{item.name}</Text>
            <Text>Clothes/Shirts</Text>
            <Text style={{fontSize:20,fontWeight:900,fontFamily:'outfit'}}>{item.price} <Text style={{fontWeight:'400',fontSize:16}}>frw</Text></Text>
           </View>
           
          </TouchableOpacity>
          <TouchableOpacity><Svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.99902 1.24599C8.11094 0.507982 9.58802 0.304096 10.8641 0.733405C13.6397 1.67315 14.5014 4.84989 13.7307 7.37764C12.5415 11.3477 7.46266 14.309 7.24725 14.4332C7.17067 14.4777 7.08587 14.5 7.00107 14.5C6.91628 14.5 6.83217 14.4785 6.75558 14.4347C6.54154 14.3119 1.49962 11.3943 0.270769 7.37836C0.270085 7.37836 0.270085 7.37764 0.270085 7.37764C-0.501281 4.84917 0.357616 1.67171 3.13057 0.733405C4.43259 0.291174 5.85155 0.485727 6.99902 1.24599ZM3.44513 1.75858C1.20147 2.51812 0.637989 5.05162 1.24729 7.04956C2.20602 10.1811 5.99378 12.7131 7.00039 13.3399C8.01041 12.7067 11.8255 10.1466 12.7535 7.05243C13.3628 5.05234 12.7973 2.51884 10.5502 1.75858C9.46151 1.39173 8.19163 1.615 7.31495 2.32716C7.13169 2.47505 6.8773 2.47792 6.69266 2.33147C5.76402 1.59848 4.55089 1.38383 3.44513 1.75858ZM9.8937 3.18427C10.8258 3.50087 11.4788 4.36738 11.5588 5.39184C11.5814 5.68833 11.3715 5.94821 11.089 5.9719C11.0747 5.97334 11.061 5.97406 11.0466 5.97406C10.782 5.97406 10.5577 5.76084 10.5358 5.47942C10.4907 4.8893 10.1146 4.39107 9.57913 4.20944C9.30902 4.11755 9.16131 3.81387 9.24816 3.53174C9.33637 3.24888 9.6229 3.09525 9.8937 3.18427Z" fill="#8E8D8D"/>
          </Svg></TouchableOpacity>
          </View>
        }}
        scrollEnabled={false}
    />
        }
</ScrollView>
</View>

)}
export default PopularScreen