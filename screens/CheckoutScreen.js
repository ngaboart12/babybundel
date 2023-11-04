import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import CheckBox from "expo-checkbox";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  decrementQuantiy,
  incrementQuantity,
  removeFromCart,
} from "../redux/Slices/cartSlice";

import { AntDesign } from "@expo/vector-icons";
import { Path, Svg } from "react-native-svg";

const CheckoutScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const ChangeAddress = () => {
    navigation.navigate("checkout");
    setModalVisible(!modalVisible);
  };
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ gap: 15, paddingTop: 38 }}>
        <View style={{ gap: 30, paddingHorizontal: 24, paddingBottom: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>checkout</Text>
            <Text></Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          {cart.map((item, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginBottom: 17,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10, height: 100 }}>
                <Image
                  source={{ uri: `${item.url}` }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 6,
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: 300, color: "#000" }}>
                  {item.name}
                </Text>

                <Text
                  style={{ fontSize: 14, fontWeight: 500, color: "#696969" }}
                >
                  {item.price} Rwf
                </Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 34,
                  }}
                >
                  <Text>Instock:{item.countInStock}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <Text>color</Text>
                    <Text
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 4,
                        borderColor: "#000",
                        padding: 0.2,
                        borderColor: "black",
                        borderWidth: 1,
                        backgroundColor: "yellow",
                      }}
                    ></Text>
                    <Text
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 4,
                        borderColor: "#000",
                        padding: 0.2,
                        borderColor: "black",
                        borderWidth: 1,
                        backgroundColor: "gray",
                      }}
                    ></Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          <Text
            style={{
              alignSelf: "flex-end",
              paddingHorizontal: 20,
              color: "#FFB648",
              fontSize: 14,
            }}
          >
            viel all
          </Text>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Text style={{ fontSize: 16, color: "#878080", fontSize: 16 }}>
              Delivery address
            </Text>
            <View
              style={{
                height: 60,
                backgroundColor: "#EAE6E6",
                padding: 18,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                placeholder="Kigali, Rwanda"
                placeholderTextColor={"black"}
                style={{
                  backgroundColor: "transparent",
                  width: "72%",
                  height: "100%",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              />

              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text
                  style={{
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingTop: 2,
                    color: "#FFB648",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  Change
                </Text>
              </TouchableOpacity>

              <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View
                  style={{
                    height: 255,
                    backgroundColor: "#ffb648",
                    bottom: 0,
                    position: "absolute",
                    width: "100%",
                  }}
                >
                  <TextInput
                    placeholder="Kigali, Rwanda"
                    placeholderTextColor={"black"}
                    style={{
                      backgroundColor: "transparent",
                      width: "72%",
                      height: "10%",
                      fontSize: 16,
                      fontWeight: 600,
                      alignSelf: "center",
                    }}
                  />

                  <Pressable onPress={ChangeAddress}>
                    <Text
                      style={{
                        color: "#000",
                        padding: 20,
                        borderWidth: 1,
                        borderBlockColor: "#fff",
                      }}
                    >
                      go back
                    </Text>
                  </Pressable>
                </View>
              </Modal>
            </View>
          </View>
        </View>

        {/* discount */}

        <View style={{ paddingHorizontal: 24, gap: 16 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, color: "#9c9c9c" }}>
              Product Price
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ fontSize: 18 }}>12000</Text>
              <Text
                style={{
                  color: "#696969",
                  fontSize: 12,
                  alignSelf: "flex-end",
                }}
              >
                Rwf
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, color: "#9c9c9c" }}>
              Delivery price
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ fontSize: 18 }}>1000</Text>
              <Text
                style={{
                  color: "#696969",
                  fontSize: 12,
                  alignSelf: "flex-end",
                }}
              >
                Rwf
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 24 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 16, fontWeight: 500, color: "#000" }}>
              Total Price
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={{ fontSize: 18 }}>${calculateTotalAmount()}</Text>
              <Text
                style={{
                  color: "#696969",
                  fontSize: 12,
                  alignSelf: "flex-end",
                }}
              >
                Rwf
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bottom: 15,
          position: "absolute",
        }}
      >
        <View style={{ width: "100%", height: 55, paddingHorizontal: 24 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFB648",
              height: 55,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
              Chek it Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxTit: {
    color: "#000",

    marginHorizontal: 1,
    padding: 0.2,
    borderColor: "black",
    borderWidth: 1,

    borderRadius: 4,
  },
  checkbox: {
    color: "#000",

    marginHorizontal: 1,
    padding: 0.2,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 43,
    borderRadius: 4,
  },
});

export default CheckoutScreen;
