import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import React, { useEffect, useState } from "react";
import { Svg, Path } from "react-native-svg";

import HomeScreen from "./HomeScreen";
import OnboardingScreen from "./OnboardingScreen";
import CartScreen from "./CartScreen";
import { Text, View } from "react-native";

import CategoryScreen from "./CategoryScreen";
import CheckoutScreen from "./CheckoutScreen";
import PopularScreen from "./PopularScreen";
import SingelProduct from "./SingelProduct";
import FavScreen from "./FavScreen";
import MomoPay from "./MomoPay";
import OrderScreen from "./OrderScreen";
import ProfileScreen from "./ProfileScreen";
import NotoficationScreen from "./NotoficationScreen";
import { useSelector } from "react-redux";
import VerifyOtp from "./verifyOtp";

import AssistanceScreen from "./assisstant/AssistanceScreen";
import AssitProductScreen from "./assisstant/AssProductListScreen";
import AsscategoryScreen from "./assisstant/AssCategoryScreen";

const Stack = createStackNavigator();
const Bottom = createMaterialBottomTabNavigator();

const HomeTab = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Bottom.Navigator
      activeColor="#e91e63"
      barStyle={{ height: 65, backgroundColor: "transparent" }}
      screenOptions={{ headerShown: false }}
    >
      <Bottom.Screen
        name="home"
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M9.13478 20.7733V17.7156C9.13478 16.9351 9.77217 16.3023 10.5584 16.3023H13.4326C13.8102 16.3023 14.1723 16.4512 14.4393 16.7163C14.7063 16.9813 14.8563 17.3408 14.8563 17.7156V20.7733C14.8539 21.0978 14.9821 21.4099 15.2124 21.6402C15.4427 21.8705 15.7561 22 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0008C21.1356 20.3588 21.5 19.487 21.5 18.5778V9.86686C21.5 9.13246 21.1721 8.43584 20.6046 7.96467L13.934 2.67587C12.7737 1.74856 11.1111 1.7785 9.98539 2.74698L3.46701 7.96467C2.87274 8.42195 2.51755 9.12064 2.5 9.86686V18.5689C2.5 20.4639 4.04738 22 5.95617 22H7.87229C8.55123 22 9.103 21.4562 9.10792 20.7822L9.13478 20.7733Z"
                fill="#FFB648"
              />
            </Svg>
          ),
        }}
        component={HomeScreen}
      />

      <Bottom.Screen
        name="favorite"
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9983 1.27884C13.9045 0.0136831 16.4366 -0.335835 18.6241 0.400122C23.3824 2.01111 24.8595 7.45695 23.5383 11.7902C21.4997 18.596 12.7931 23.6726 12.4239 23.8855C12.2926 23.9619 12.1472 24 12.0018 24C11.8565 24 11.7123 23.9631 11.581 23.888C11.2141 23.6776 2.57078 18.676 0.464175 11.7915C0.463003 11.7915 0.463003 11.7902 0.463003 11.7902C-0.859338 7.45572 0.613056 2.00865 5.36669 0.400122C7.59872 -0.357988 10.0312 -0.0244686 11.9983 1.27884ZM5.90594 2.15756C2.05966 3.45964 1.09369 7.80278 2.1382 11.2278C3.78175 16.5961 10.2751 20.9368 12.0007 22.0112C13.7321 20.9257 20.2723 16.537 21.8631 11.2327C22.9076 7.80401 21.9382 3.46087 18.086 2.15756C16.2197 1.52867 14.0428 1.91142 12.5399 3.13227C12.2257 3.3858 11.7897 3.39072 11.4731 3.13966C9.88117 1.88311 7.80153 1.51514 5.90594 2.15756ZM16.9606 4.6016C18.5585 5.14434 19.678 6.6298 19.8151 8.386C19.8538 8.89428 19.4939 9.3398 19.0098 9.38041C18.9852 9.38287 18.9617 9.3841 18.9371 9.3841C18.4834 9.3841 18.0989 9.01858 18.0614 8.53615C17.984 7.52451 17.3393 6.67041 16.4214 6.35904C15.9583 6.20151 15.7051 5.68093 15.854 5.19726C16.0052 4.71237 16.4964 4.449 16.9606 4.6016Z"
                fill="#8E8D8D"
              />
            </Svg>
          ),
        }}
        component={FavScreen}
      />

      <Bottom.Screen
        name="componentt"
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel: false,

          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                borderRadius: 30,
                backgroundColor: "#494848",
                justifyContent: "center",
                marginTop: -16,
              }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7808 2.00031C14.3946 2.00031 16.5539 3.99196 16.8202 6.53923L16.8945 6.54011C18.3445 6.54011 20.1075 7.5031 20.7025 10.2041L21.4915 16.3111C21.7745 18.2821 21.4205 19.8631 20.4375 20.9971C19.4595 22.1251 17.9115 22.7221 15.9605 22.7221H7.61247C5.46947 22.7221 3.97647 22.1971 3.04747 21.1181C2.11447 20.0361 1.80247 18.4131 2.12047 16.2951L2.89647 10.2691C3.40647 7.5061 5.27147 6.54011 6.71547 6.54011C6.84013 5.39058 7.35847 4.29701 8.18077 3.47731C9.12577 2.53831 10.4288 2.00031 11.7598 2.00031H11.7808ZM16.8945 8.04011H6.71547C6.27447 8.04011 4.80047 8.2181 4.37747 10.5021L3.60547 16.5021C3.35447 18.1851 3.54847 19.4031 4.18347 20.1401C4.81047 20.8681 5.93247 21.2221 7.61247 21.2221H15.9605C17.0085 21.2221 18.4395 21.0131 19.3035 20.0151C19.9895 19.2241 20.2255 18.0461 20.0055 16.5131L19.2265 10.4611C18.8945 8.9701 18.0185 8.04011 16.8945 8.04011ZM14.6973 10.8242C15.1113 10.8242 15.4703 11.1602 15.4703 11.5742C15.4703 11.9882 15.1573 12.3242 14.7433 12.3242H14.6973C14.2833 12.3242 13.9473 11.9882 13.9473 11.5742C13.9473 11.1602 14.2833 10.8242 14.6973 10.8242ZM8.86717 10.8242C9.28117 10.8242 9.64017 11.1602 9.64017 11.5742C9.64017 11.9882 9.32617 12.3242 8.91217 12.3242H8.86717C8.45317 12.3242 8.11717 11.9882 8.11717 11.5742C8.11717 11.1602 8.45317 10.8242 8.86717 10.8242ZM11.7778 3.50031H11.7628C10.8218 3.50031 9.90477 3.87931 9.23977 4.54031C8.69807 5.07957 8.34379 5.7885 8.22918 6.53964L15.3085 6.53992C15.0515 4.82168 13.5657 3.50031 11.7778 3.50031Z"
                  fill="#8E8D8D"
                />
              </Svg>
            </View>
          ),
        }}
        component={AssistanceScreen}
      />
      <Bottom.Screen
        name="cart"
        options={{
          tabBarLabel: false,

          tabBarIcon: ({ color }) => (
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.7808 2.00031C14.3946 2.00031 16.5539 3.99196 16.8202 6.53923L16.8945 6.54011C18.3445 6.54011 20.1075 7.5031 20.7025 10.2041L21.4915 16.3111C21.7745 18.2821 21.4205 19.8631 20.4375 20.9971C19.4595 22.1251 17.9115 22.7221 15.9605 22.7221H7.61247C5.46947 22.7221 3.97647 22.1971 3.04747 21.1181C2.11447 20.0361 1.80247 18.4131 2.12047 16.2951L2.89647 10.2691C3.40647 7.5061 5.27147 6.54011 6.71547 6.54011C6.84013 5.39058 7.35847 4.29701 8.18077 3.47731C9.12577 2.53831 10.4288 2.00031 11.7598 2.00031H11.7808ZM16.8945 8.04011H6.71547C6.27447 8.04011 4.80047 8.2181 4.37747 10.5021L3.60547 16.5021C3.35447 18.1851 3.54847 19.4031 4.18347 20.1401C4.81047 20.8681 5.93247 21.2221 7.61247 21.2221H15.9605C17.0085 21.2221 18.4395 21.0131 19.3035 20.0151C19.9895 19.2241 20.2255 18.0461 20.0055 16.5131L19.2265 10.4611C18.8945 8.9701 18.0185 8.04011 16.8945 8.04011ZM14.6973 10.8242C15.1113 10.8242 15.4703 11.1602 15.4703 11.5742C15.4703 11.9882 15.1573 12.3242 14.7433 12.3242H14.6973C14.2833 12.3242 13.9473 11.9882 13.9473 11.5742C13.9473 11.1602 14.2833 10.8242 14.6973 10.8242ZM8.86717 10.8242C9.28117 10.8242 9.64017 11.1602 9.64017 11.5742C9.64017 11.9882 9.32617 12.3242 8.91217 12.3242H8.86717C8.45317 12.3242 8.11717 11.9882 8.11717 11.5742C8.11717 11.1602 8.45317 10.8242 8.86717 10.8242ZM11.7778 3.50031H11.7628C10.8218 3.50031 9.90477 3.87931 9.23977 4.54031C8.69807 5.07957 8.34379 5.7885 8.22918 6.53964L15.3085 6.53992C15.0515 4.82168 13.5657 3.50031 11.7778 3.50031Z"
                  fill="#8E8D8D"
                />
              </Svg>
              <View
                style={{
                  position: "absolute",
                  right: -8,
                  width: 20,
                  minheight: 20,
                  backgroundColor: "orange",
                  borderRadius: 20,
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  {cart.length}
                </Text>
              </View>
            </View>
          ),
        }}
        component={CartScreen}
      />

      <Bottom.Screen
        name="profile"
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701L11.6776 21.8699C9.51208 21.8646 3.99988 21.7279 3.99988 18.1731C3.99988 14.9444 8.33823 14.5129 11.7114 14.4966L12.1641 14.4963C14.3295 14.5016 19.8399 14.6383 19.8399 18.1931ZM11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 1.99969C14.8489 1.99969 17.2299 4.38169 17.2299 7.30969C17.2299 10.2377 14.8489 12.6187 11.9209 12.6187H11.8889C8.96688 12.6097 6.59988 10.2267 6.60985 7.30669C6.60985 4.3817 8.99188 1.99969 11.9209 1.99969ZM11.9209 3.42769C9.77988 3.42769 8.03786 5.16869 8.03786 7.30969C8.03088 9.4437 9.75988 11.1837 11.8919 11.1917L11.9209 11.9057V11.1917C14.0609 11.1917 15.8019 9.44969 15.8019 7.30969C15.8019 5.16869 14.0609 3.42769 11.9209 3.42769Z"
                fill="#8E8D8D"
              />
            </Svg>
          ),
        }}
        component={ProfileScreen}
      />
    </Bottom.Navigator>
  );
};
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboard" component={OnboardingScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="verify" component={VerifyOtp} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="order" component={OrderScreen} />
        <Stack.Screen name="momopay" component={MomoPay} />
        <Stack.Screen name="category" component={CategoryScreen} />
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen name="single" component={SingelProduct} />
        <Stack.Screen name="popular" component={PopularScreen} />
        <Stack.Screen name="assist" component={AssistanceScreen} />
        <Stack.Screen name="asscategory" component={AsscategoryScreen} />
        <Stack.Screen name="assproducts" component={AssitProductScreen} />
        <Stack.Screen name="homeTab" component={HomeTab} />
        <Stack.Screen name="cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
