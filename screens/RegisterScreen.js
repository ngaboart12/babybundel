import { View, Text, ImageBackground,TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import  { useDispatch,useSelector  } from "react-redux"
import { useRegisterMutation } from '../redux/apiSlice/userApiAlice'
import { useFonts } from 'expo-font'
import { AntDesign } from '@expo/vector-icons';
import { addUser } from '../redux/Slices/userSlice'
import axios from 'axios'


const RegisterScreen = ({navigation}) => {
    const [loaded] = useFonts({
        Pattaya: require('../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf')
    })


    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')

    const handelSubmit = async()=>{
        await axios.post('http://192.168.1.66:6000/api/auth/register',{
            email:email,
            phone:phone,
            password:password
        }).then((response)=>{
            navigation.navigate('verify', {userId:response.data.data.userId,email:response.data.data.email})
        })
    }




 
    


  return (
    <View>
        <StatusBar style="light" />
       <ImageBackground source={require('../assets/image/header.png')} style={{width:'100%',height:200}}></ImageBackground>
       <View style={{padding:20,gap:24}}>
        <View>
            <Text style={{fontSize:16,color:'#000',fontWeight:400}}>Welcome Back</Text>
            <Text style={{fontSize:34,color:'#FFB648',fontWeight:800,}}>Sign Up</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',gap:16}}>
            
            <View style={{display:'flex',flexDirection:'column',gap:6}}>
                <Text style={{fontSize:16,color:'#000',fontWeight:400}}>Email or Phone number</Text>
                <View style={{height:60,backgroundColor:'#EAE6E6',padding:10}}>
                    <TextInput placeholder='Email account' style={styles.input} onChangeText={text => setEmail(text)} />
                </View>
            </View>


            <View style={{display:'flex',flexDirection:'column',gap:2}}>
                <Text style={{fontSize:16,color:'#000',fontWeight:400}}>Password</Text>
                <View style={{height:60,backgroundColor:'#EAE6E6',padding:10}}>
                    <TextInput secureTextEntry  placeholder='Password' style={styles.input} onChangeText={text => setPassword(text)} />
                </View>
            </View>
            <View style={{gap:10}}>
                <TouchableOpacity onPress={handelSubmit} style={{backgroundColor:'#FFB648',height:60,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff', fontSize:24}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity><Text>Sign Up With Phone Number</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('login')} style={{justifyContent:'center'}}>
                    <Text style={{textAlign:'center',fontSize:16,fontWeight:'500'}}>Already have account? Login</Text>
                </TouchableOpacity>
            </View>
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

export default RegisterScreen