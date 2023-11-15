// AddressScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../redux/Slices/addressSlice';
import { auth, db } from '../firebaseConfig';
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';

const addressesData = [
  { id: '1', address: '123 Main St' },
  { id: '2', address: '456 Oak Ave' },
  { id: '3', address: '789 Pine Blvd' },
];

const AddressScreen = ({navigation,route}) => {
  const dispatch = useDispatch();
  const { address } = useSelector((state) => state.address);
  const {onSelectAddress} = route.params

  const [city,setCity] = useState()
  const [street,setStreet] = useState()
  const [state,setState] = useState()
  
  const [addresses, setAddresses] = useState(addressesData);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  
  const updateAddressForCurrentUser = async () => {
    const userId = auth.currentUser.uid
    const newAddress = {
      city:city,
      state:state,
      street:street
    }
    try {
      // Reference to the users collection in Firestore
      const usersCollectionRef = collection(db, 'users');
  
      // Create a query to find documents where uid is equal to currentUserUid
      const usersQuery = query(usersCollectionRef, where('uid', '==', userId));
  
      // Get the documents that match the query
      const usersSnapshot = await getDocs(usersQuery);
  
      // Update each matching document with the new address
      usersSnapshot.forEach(async (userDoc) => {
        const userDocRef = doc(db, 'users', userDoc.id);
        await updateDoc(userDocRef, {
          address: newAddress,
        });
      });
  
      console.log('Addresses updated successfully');
    } catch (error) {
      console.error('Error updating addresses:', error);
    }
  };


  const addAddressItem = (data) => {
    dispatch(addAddress(data));
    setNewAddress('');
    toggleModal();
  };
 
  const selectAddressAndNavigate = (item)=>{
     setSelectedAddress(item)
     onSelectAddress(selectedAddress);
     navigation.goBack()
   

  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.addressItem}
      onPress={()=> selectAddressAndNavigate(item)}
    >
      <Text>{item.address}</Text>
    </TouchableOpacity>
  );

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={updateAddressForCurrentUser}>
        <Text>Send ass</Text>
      </TouchableOpacity>
       <TextInput placeholder='City' onChangeText={text => setCity(text)} />
       <TextInput placeholder='Street'  onChangeText={text => setStreet(text)}  />
       <TextInput placeholder='State'  onChangeText={text => setState(text)}  />
      <FlatList
        data={address}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => <Text style={styles.headerText}>Addresses</Text>}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            value={newAddress}
            onChangeText={(text) => setNewAddress(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addAddressItem({ id: String(address.length + 1), address: newAddress })}
          >
            <Text style={styles.addButtonText}>Add Address</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={toggleModal}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.addButton}
        onPress={toggleModal}
      >
        <Text style={styles.addButtonText}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // ... (Other styles remain unchanged)
});

export default AddressScreen;
