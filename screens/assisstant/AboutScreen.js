import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

const AboutScreen = ({navigation}) => {
  return (
    <View style={{padding:40}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
      
      <Text>AboutScreen</Text>

      </TouchableOpacity>
    </View>
  )
}

export default AboutScreen