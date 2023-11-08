import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Path, Svg } from 'react-native-svg'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import  Pending from '../component/Pending'
import  Completed from '../component/Completed'
import { useSelector } from 'react-redux'
const TopTab = createMaterialTopTabNavigator()

const OrderScreen = ({navigation}) => {

  
  return (
    <>
    <View style={styles.orderContain}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.772589 7.51545C0.635884 7.37874 0.559082 7.19333 0.559082 7C0.559082 6.80667 0.635884 6.62126 0.772589 6.48455L6.95798 0.299162C7.09468 0.162456 7.2801 0.0856552 7.47343 0.0856552C7.66676 0.0856552 7.85217 0.162456 7.98888 0.299161C8.12558 0.435867 8.20238 0.62128 8.20238 0.814611C8.20238 1.00794 8.12558 1.19335 7.98888 1.33006L3.04778 6.27116L23.9678 6.27012C24.0636 6.27012 24.1586 6.289 24.2471 6.32568C24.3357 6.36236 24.4161 6.41612 24.4839 6.4839C24.5517 6.55168 24.6054 6.63214 24.6421 6.72069C24.6788 6.80924 24.6977 6.90415 24.6977 7C24.6977 7.09585 24.6788 7.19076 24.6421 7.27931C24.6054 7.36786 24.5517 7.44832 24.4839 7.5161C24.4161 7.58388 24.3357 7.63764 24.2471 7.67432C24.1586 7.711 24.0636 7.72988 23.9678 7.72988L3.04778 7.72884L7.98888 12.6699C8.12558 12.8066 8.20238 12.9921 8.20238 13.1854C8.20238 13.3787 8.12558 13.5641 7.98888 13.7008C7.85217 13.8375 7.66676 13.9143 7.47343 13.9143C7.2801 13.9143 7.09468 13.8375 6.95798 13.7008L0.772589 7.51545Z" fill="black"/>
          </Svg>
        </TouchableOpacity>
        <View>
          <Text style={{fontSize:20,fontFamily:'Red-Hat'}}>Orders</Text>
        </View>
        <View>

        </View>
      </View>
    </View>
     
     
        <TopTab.Navigator
          screenOptions={{

            tabBarIndicatorStyle:{
              backgroundColor:'orange'
            },
            tabBarActiveTintColor:'orange',
            tabBarLabelStyle:{
              color:'black',
              fontWeight:'600',
              fontFamily:'Red-Hat'
            },
           
            
            tabBarStyle:{
              marginHorizontal:20,
              backgroundColor:'white',
              shadowColor:'white',
              
            }
          }}
         
         >
          <TopTab.Screen name='Pending' component={Pending} />
          <TopTab.Screen name='Completed' component={Completed} />
        </TopTab.Navigator>
       
        
    </>
      
  )
}
const styles = StyleSheet.create({
  orderContain:{
    paddingTop:40,
    paddingBottom:20,
    paddingHorizontal:20
  },
  header:{
    display:'flex',
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center'

  },
  navbar:{
    display:'flex',
    flexDirection:'row',

  }
})

export default OrderScreen