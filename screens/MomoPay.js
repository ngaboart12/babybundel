import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { useFonts } from 'expo-font'
import { useSingelproductQuery } from '../redux/apiSlice/userApiAlice'
import { useNavigation } from '@react-navigation/native'

const MomoPay = ({route}) => {
  const navigation = useNavigation()
  const {id} = route?.params
  const {data:singelProduct,isLoading} = useSingelproductQuery(id)
  const [Fontsloaded]= useFonts({
    "indieflower": require('../assets/fonts/IndieFlower-Regular.ttf'),
    "Outfit": require('../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf'),
    "Red-Hat": require('../assets/fonts/RedHatDisplay-Medium.ttf'),

})
if(!Fontsloaded){
    return undefined;
}
  return (
    <View style={styles.momoConatain}>
      <View style={{gap:10}}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:"space-around"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.772589 7.51545C0.635884 7.37874 0.559082 7.19333 0.559082 7C0.559082 6.80667 0.635884 6.62126 0.772589 6.48455L6.95798 0.299162C7.09468 0.162456 7.2801 0.0856552 7.47343 0.0856552C7.66676 0.0856552 7.85217 0.162456 7.98888 0.299161C8.12558 0.435867 8.20238 0.62128 8.20238 0.814611C8.20238 1.00794 8.12558 1.19335 7.98888 1.33006L3.04778 6.27116L23.9678 6.27012C24.0636 6.27012 24.1586 6.289 24.2471 6.32568C24.3357 6.36236 24.4161 6.41612 24.4839 6.4839C24.5517 6.55168 24.6054 6.63214 24.6421 6.72069C24.6788 6.80924 24.6977 6.90415 24.6977 7C24.6977 7.09585 24.6788 7.19076 24.6421 7.27931C24.6054 7.36786 24.5517 7.44832 24.4839 7.5161C24.4161 7.58388 24.3357 7.63764 24.2471 7.67432C24.1586 7.711 24.0636 7.72988 23.9678 7.72988L3.04778 7.72884L7.98888 12.6699C8.12558 12.8066 8.20238 12.9921 8.20238 13.1854C8.20238 13.3787 8.12558 13.5641 7.98888 13.7008C7.85217 13.8375 7.66676 13.9143 7.47343 13.9143C7.2801 13.9143 7.09468 13.8375 6.95798 13.7008L0.772589 7.51545Z" fill="black"/>
          </Svg>
        </TouchableOpacity>
        <Text style={{fontFamily:'Red-Hat',fontSize:20,fontWeight:600}}>Mobile Money</Text>
        <Text style={{fontFamily:'Red-Hat',fontSize:20,fontWeight:600}}></Text>

      </View>
      <View style={{display:"flex",flexDirection:'row',gap:10,alignItems:'center',paddingTop:30, paddingHorizontal:20,}}>
        <View style={{width:94,height:94,backgroundColor:'gray',borderRadius:6}}>
          <Image source={require('../assets/image/shipp.png')} style={{width:'100%',height:'100%',borderRadius:6}}/>
        </View>
        <View>
          <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>Shoes</Text>
          <Text style={{fontSize:24,fontFamily:'Red-Hat'}}>12000 $</Text>
          <View style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
            <Text style={{fontSize:14,fontFamily:'Red-Hat'}}>Sizes: <Text style={{fontSize:16,fontWeight:700}}>26</Text></Text>
            <Text style={{fontSize:18,fontFamily:'Red-Hat'}}>Color: <View style={{width:10,height:15,backgroundColor:'red'}}></View></Text>
            
          </View>
        </View>
      </View>
      <View style={styles.form}>
        <View style={{gap:10,width:'100%'}}>
          <Text style={{fontSize:16,fontFamily:'Red-Hat'}}>Shipping Address</Text>
          
          <TextInput value='Kigali-Rwanda' style={styles.input}/>
        </View>
        <View style={{gap:10,width:'100%'}}>
          <Text style={{fontSize:16,fontFamily:'Red-Hat'}}>Phone number</Text>
          
          <TextInput  value='+25073456' style={styles.input}/>
        </View>

      </View>
      </View>
      <View style={styles.payContain}>
          <View style={{gap:6, paddingHorizontal:20,}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,fontFamily:'Outfit',color:'#9C9B9B'}}>Product Price</Text>
              <Text style={{fontSize:20,fontFamily:'Red-Hat'}}>12 000 frw</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,fontFamily:'Outfit',color:'#9C9B9B'}}>Shipping Price</Text>
              <Text style={{fontSize:20,fontFamily:'Red-Hat'}}>1000 frw</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:18,fontFamily:'Outfit',fontWeight:800}}>Total Price</Text>
              <Text style={{fontSize:20,fontFamily:'Red-Hat'}}>13 000 frw</Text>
            </View>
          </View>
          <View style={{display:'flex',flexDirection:'row'}}>
            <View style={{height:60,width:'50%',justifyContent:'center',paddingHorizontal:20}}>
              <Text>Total</Text>
              <Text style={{fontSize:20,fontFamily:'Red-Hat'}}>13000 frw</Text>

            </View>
            <View style={{backgroundColor:'#FFB648',height:60,width:'50%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontFamily:'Red-Hat',color:'white',fontSize:20}}>Confirm</Text>

            </View>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  momoConatain:{
    flex:1,
    paddingTop:40,
    gap:20,
    justifyContent:'space-between'
  },
  form:{
    gap:30,
    width:'100%',
    paddingTop:20,
    paddingHorizontal:20,
  },
  input:{
    backgroundColor:'#E7E7E7',
    height:60,paddingHorizontal:10,
    fontSize:20,fontFamily:'Red-Hat'

  },
  payContain:{
    gap:40,
  }

})

export default MomoPay