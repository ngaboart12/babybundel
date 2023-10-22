import { View, Text, ImageBackground,TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLoginMutation } from '../redux/apiSlice/userApiAlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFonts} from "expo-font"
import { AntDesign } from '@expo/vector-icons';
import { addUser } from '../redux/Slices/userSlice'


const LoginScreen = ({navigation}) => {

  
    const dispatch = useDispatch();
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [login]  = useLoginMutation();

    const handelSubmit = async(req,res)=>{
        try {
            const result = await login({email,password}).unwrap();
            if(result){
                dispatch(addUser(result))
                navigation.navigate('home')
            }
            
        } catch (err) {
            console.log(err)
            
        }
   
    }
  
  
  return (
    <View>
        <StatusBar style="light" />
       <ImageBackground source={require('../assets/image/header.png')} style={{width:'100%',height:200}}></ImageBackground>
       <View style={{padding:20,gap:24}}>
        <View>
            <Text  style={{fontSize:16,color:'#000',fontWeight:400,}}>Welcome Back</Text>
            <Text style={{fontSize:36,color:'#FFB648',fontWeight:800,}}>Sign In</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',gap:16}}>
            
            <View style={{display:'flex',flexDirection:'column',gap:6}}>
                <Text style={{fontSize:16,color:'#000',fontWeight:400,}}>Email account</Text>
                <View style={{height:60,backgroundColor:'#EAE6E6',padding:10}}>
                    <TextInput placeholder='Email account' style={styles.input} onChangeText={text => setEmail(text)} />
                </View>
            </View>

            <View style={{display:'flex',flexDirection:'column',gap:6}}>
                <Text style={{fontSize:16,color:'#000',fontWeight:400,}}>Password</Text>
                <View style={{height:60,backgroundColor:'#EAE6E6',padding:10}}>
                    <TextInput secureTextEntry  placeholder='Password' style={styles.input} onChangeText={text => setPassword(text)} />
                </View>
            </View>
            <View style={{gap:10}}>
                <TouchableOpacity onPress={handelSubmit} style={{backgroundColor:'#FFB648',height:60,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff', fontSize:24,}}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('register')} style={{justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'600',}}>Don't have account? Register</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{paddingTop:10,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:8}}>
            <AntDesign name="google" size={32} color="orange" />
            <Text style={{fontSize:16,}}>Sign In With Google</Text>
            </TouchableOpacity>
        </View>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        backgroundColor:'transparent',width:'100%',height:'100%'
    }
})

export default LoginScreen