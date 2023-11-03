import { View, Text, Image, StyleSheet } from "react-native";
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

const CartScreen = ({ navigation }) => {
  //const [isChecked, setIsChecked] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={{ width: "100%", gap: 20, height: "100%" }}>
      <View style={{ gap: 20, padding: 40 }}>
        <View style={{ gap: 30 }}>
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
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Shooping cart</Text>
            <Text></Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View>
                <CheckBox
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "#4630EB" : undefined}
                  style={styles.checkboxTit}
                />
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ fontSize: 16, fontWeight: 400 }}>
                  Select All Product (4)
                </Text>
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 700 }}>Delete</Text>
          </View>
        </View>
        <View>
          {cart.map((item, index) => (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10, height: 100 }}>
                <View
                  style={{
                    height: 100,
                    alignContent: "center",
                    alignSelf: "center",
                  }}
                >
                  <View>
                    <CheckBox
                      value={isChecked}
                      onValueChange={setChecked}
                      color={isChecked ? "#4630EB" : undefined}
                      style={styles.checkbox}
                    />
                  </View>
                </View>
                <Image
                  source={{ uri: `${item.image}` }}
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: 300, color: "#000" }}
                  >
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => dispatch(removeFromCart(item))}
                  >
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5385 5.03999C12.8482 5.06549 13.0792 5.33624 13.0544 5.64599C13.0499 5.69699 12.6435 10.7302 12.4095 12.8415C12.264 14.1517 11.3984 14.949 10.0919 14.973C9.0922 14.9902 8.1277 15 7.18495 15C6.1687 15 5.17795 14.9887 4.1977 14.9685C2.9437 14.9437 2.07595 14.1307 1.9342 12.8467C1.69795 10.7167 1.2937 5.69624 1.28995 5.64599C1.26445 5.33624 1.49545 5.06474 1.8052 5.03999C2.11045 5.03174 2.38645 5.24624 2.4112 5.55524C2.41359 5.58779 2.57886 7.63801 2.75895 9.66652L2.79512 10.0713C2.88582 11.0796 2.97777 12.0485 3.05245 12.723C3.1327 13.4527 3.52645 13.8292 4.22095 13.8435C6.09595 13.8832 8.0092 13.8855 10.0717 13.848C10.8097 13.8337 11.2087 13.4647 11.2912 12.7177C11.5237 10.6222 11.9287 5.60624 11.9332 5.55524C11.9579 5.24624 12.2317 5.03024 12.5385 5.03999ZM8.75905 0.000213623C9.44755 0.000213623 10.0528 0.464464 10.2305 1.12971L10.4211 2.07546C10.4826 2.38549 10.7547 2.61191 11.0697 2.61688L13.531 2.61696C13.8415 2.61696 14.0935 2.86896 14.0935 3.17946C14.0935 3.48996 13.8415 3.74196 13.531 3.74196L11.0917 3.74185C11.0879 3.74193 11.0841 3.74196 11.0803 3.74196L11.062 3.74121L3.28121 3.74187C3.27517 3.74193 3.26911 3.74196 3.26305 3.74196L3.2515 3.74121L0.8125 3.74196C0.502 3.74196 0.25 3.48996 0.25 3.17946C0.25 2.86896 0.502 2.61696 0.8125 2.61696L3.27325 2.61621L3.34902 2.61142C3.63123 2.5748 3.86578 2.36046 3.92305 2.07546L4.1053 1.16346C4.29055 0.464464 4.8958 0.000213623 5.5843 0.000213623H8.75905ZM8.75905 1.12521H5.5843C5.4043 1.12521 5.24605 1.24596 5.2003 1.41921L5.02555 2.29671C5.00334 2.40786 4.971 2.51497 4.92961 2.61717H9.41396C9.37252 2.51497 9.34011 2.40786 9.3178 2.29671L9.13555 1.38471C9.0973 1.24596 8.93905 1.12521 8.75905 1.12521Z"
                        fill="black"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>

                <Text
                  style={{ fontSize: 14, fontWeight: 500, color: "#696969" }}
                >
                  {item.price} Rwf
                </Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text>Instock:{item.countInStock}</Text>
                  <View
                    style={{ display: "flex", flexDirection: "row", gap: 4 }}
                  >
                    <TouchableOpacity
                      onPress={() => dispatch(decrementQuantiy(item))}
                    >
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.99992 1.33333C11.6759 1.33333 14.6666 4.32399 14.6666 7.99999C14.6666 11.676 11.6759 14.6667 7.99992 14.6667C4.32392 14.6667 1.33325 11.676 1.33325 7.99999C1.33325 4.32399 4.32392 1.33333 7.99992 1.33333ZM7.99992 2.33333C4.87525 2.33333 2.33325 4.87533 2.33325 7.99999C2.33325 11.1247 4.87525 13.6667 7.99992 13.6667C11.1246 13.6667 13.6666 11.1247 13.6666 7.99999C13.6666 4.87533 11.1246 2.33333 7.99992 2.33333ZM9.31552 5.33313C9.51085 5.52913 9.50952 5.84579 9.31419 6.04046L7.34618 7.99979L9.31419 9.95979C9.50952 10.1545 9.51085 10.4705 9.31552 10.6665C9.21818 10.7651 9.08952 10.8138 8.96152 10.8138C8.83418 10.8138 8.70618 10.7651 8.60885 10.6678L6.28418 8.35446C6.19019 8.26046 6.13752 8.13313 6.13752 7.99979C6.13752 7.86713 6.19019 7.73979 6.28418 7.64579L8.60885 5.33179C8.80418 5.13713 9.12018 5.13713 9.31552 5.33313Z"
                          fill="black"
                        />
                      </Svg>
                    </TouchableOpacity>

                    <Text>{item.quantity}</Text>

                    <TouchableOpacity
                      onPress={() => dispatch(incrementQuantity(item))}
                    >
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.99992 1.33333C11.6759 1.33333 14.6666 4.32399 14.6666 7.99999C14.6666 11.676 11.6759 14.6667 7.99992 14.6667C4.32392 14.6667 1.33325 11.676 1.33325 7.99999C1.33325 4.32399 4.32392 1.33333 7.99992 1.33333ZM7.99992 2.33333C4.87525 2.33333 2.33325 4.87533 2.33325 7.99999C2.33325 11.1247 4.87525 13.6667 7.99992 13.6667C11.1246 13.6667 13.6666 11.1247 13.6666 7.99999C13.6666 4.87533 11.1246 2.33333 7.99992 2.33333ZM7.39165 5.33179L9.71565 7.64579C9.80965 7.73979 9.86232 7.86713 9.86232 7.99979C9.86232 8.13313 9.80965 8.26046 9.71565 8.35446L7.39165 10.6678C7.29432 10.7651 7.16632 10.8138 7.03899 10.8138C6.91099 10.8138 6.78232 10.7651 6.68499 10.6665C6.49032 10.4705 6.49098 10.1545 6.68632 9.95979L8.65432 7.99979L6.68632 6.04046C6.49098 5.84579 6.49032 5.52913 6.68499 5.33313C6.87965 5.13646 7.19565 5.13779 7.39165 5.33179Z"
                          fill="black"
                        />
                      </Svg>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bottom: 0,
          position: "absolute",
          left: 40,
        }}
      >
        <View style={{ width: "50%", height: 60, justifyContent: "center" }}>
          <Text style={{ fontFamily: "Red-Hat" }}>Total Price</Text>
          <Text style={{ fontSize: 20, fontFamily: "Red-Hat" }}>
            ${calculateTotalAmount()}
          </Text>
        </View>
        <View style={{ width: "50%", height: 60 }}>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#FFB648",
              height: 60,
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

export default CartScreen;
