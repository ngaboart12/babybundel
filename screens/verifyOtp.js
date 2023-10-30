import axios from 'axios';
import { useFonts } from 'expo-font';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/Slices/userSlice';
import { useNavigation } from '@react-navigation/native';

export default function VerifyOtp({route}) {
    const dispatch = useDispatch() 
    const navigation = useNavigation()
    const {userId,email} = route.params;
    
  const inputRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (text, index) => {
    if (/^\d+$/.test(text) || text === '') {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 3 && text !== '') {
        inputRefs[index + 1].current.focus();
      }
    }
  };
  const [Fontsloaded]= useFonts({
    "indieflower": require('../assets/fonts/IndieFlower-Regular.ttf'),
    "Outfit": require('../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf'),
    "Red-Hat": require('../assets/fonts/RedHatDisplay-Medium.ttf'),

})
if(!Fontsloaded){
    return undefined;
}
 
  const handleVerify = async() => {
    // Implement your OTP verification logic here.
    const enteredOTP = otp.join('');
    await axios.post('http://192.168.1.66:6000/api/auth/verify', {
        userId:userId,
        otp:enteredOTP
    }).then((response)=>{
        dispatch(addUser(userId,email))
        navigation.navigate('homeTab')
        
    })
   
    console.log('OTP to verify: ', enteredOTP);
  };

  return (
    <View style={styles.container}>
        
    <ImageBackground source={require('../assets/image/header.png')} style={{width:'100%',height:200}}></ImageBackground>
       
    <View style={styles.conatin}>
   
      <Text style={styles.text}>Welcome</Text>
      <View style={{gap:10}}>
        <Text style={{fontSize:34,fontWeight:600,fontFamily:'Red-Hat'}}>Verification code</Text>
        <Text style={{fontSize:18,fontFamily:'Red-Hat',width:280}}>Verify your account with the code we sent you</Text>
      </View>
      <View style={{paddingTop:40,gap:20}}>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
            <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            onChangeText={(text) => handleOtpChange(text, index)}
            value={value}
            maxLength={1}
            keyboardType="numeric"
            />
            ))}
      </View>
      <TouchableOpacity style={[styles.button, otp.includes('') ? styles.disabledButton : {}]}
       onPress={handleVerify} disabled={otp.includes('') || otp.length !== 4} >
        <Text style={{fontSize:20,color:'white',fontFamily:'Red-Hat'}}>Verify</Text>
      </TouchableOpacity>
    </View>
    </View>
    
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap:20
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  input: {
    borderWidth: 1,
    borderColor:'lightgray',
    width: 60,
    height: 60,
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
  },
  conatin:{
    paddingHorizontal:20,
    gap:10

  },
  text:{
    fontSize:20,
    fontFamily:'Red-Hat',

  },
  button:{
    height:60,
    backgroundColor:'#FFB648',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  disabledButton:{
    backgroundColor:'lightgray',

  }
});
