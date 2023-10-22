import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Navigation from './screens/navigation';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {

  

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>


      <View style={styles.container}>
       <Navigation/>
    </View>
        </PersistGate>
  
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

  },
});
