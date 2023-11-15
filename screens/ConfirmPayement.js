import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useSelector } from "react-redux";
import {  collection, addDoc } from 'firebase/firestore'
import { auth, db } from "../firebaseConfig";

const ConfirmPayment = ({ navigation,route }) => {
    const { paymentMethod } = route.params;
   
  const cart = useSelector((state) => state.cart.cart);


  const renderCartItem = (item, index) => (
    <View key={index} style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>{item.price} Rwf</Text>
    </View>
  );
  const customerName = "John Doe"; 
  const customerEmail = auth.currentUser.email
  const addOrderToFirestore = async () => {
    try {
      const orderData = {
        paymentMethod,
        customerName,
        customerEmail,
        cart,
        // Add any other relevant order data
      };

      await addDoc(collection(db, 'orders'), orderData);

      console.log("Order data added to Firestore successfully!");
    } catch (error) {
      console.error("Error adding order data to Firestore:", error);
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{paymentMethod}</Text>
      </View>

      <View style={styles.cartContainer}>
        {cart.map(renderCartItem)}
      </View>

      <View style={styles.paymentCodeContainer}>
        <Text style={styles.paymentCodeLabel}>Payment Code: 2490562</Text>
      
      </View>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => {
          // Add logic to confirm the payment
          // This is a placeholder, you should implement your actual payment confirmation logic
          alert("Payment Confirmed!");
          navigation.navigate("ConfirmOrder"); // Navigate to the order confirmation page
        }}
      >
        <Text style={styles.confirmButtonText} onPress={addOrderToFirestore}>Confirm Payment</Text>
      </TouchableOpacity>

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FFB648",
    paddingVertical: 16,
    paddingTop:30,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    fontFamily:'Outfit',
    fontWeight:'100'
  },
  cartContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  cartItemPrice: {
    fontSize: 16,
    color: "#696969",
  },
  paymentCodeContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  paymentCodeLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  paymentCode: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFB648",
  },
  confirmButton: {
    backgroundColor: "#FFB648",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 8,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  generateCodeButton: {
    backgroundColor: "#EAE6E6",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  generateCodeButtonText: {
    color: "#696969",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ConfirmPayment;
