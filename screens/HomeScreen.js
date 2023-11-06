import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";

import { TextInput } from "react-native-gesture-handler";
import Svg, { Path, Rect } from "react-native-svg";
import { useGetuserQuery } from "../redux/apiSlice/userApiAlice";
import { useDispatch, useSelector } from "react-redux";
import HotSales from "../component/HotSales";
import Product from "../component/Product";
import { useFonts } from "expo-font";
import { logout } from "../redux/Slices/userSlice";
import axios from "axios";
import io from "socket.io-client";
import { addToNot } from "../redux/Slices/notSlice";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  const [not, setNot] = useState("");

  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logout());
    navigation.navigate("onboard");
  };

  const { data: allData, isFetching } = useGetuserQuery();
  const [category, setCategory] = useState();
  const [allProduct, setProduct] = useState();

  const [products, setProducts] = useState([]);

  const { noti } = useSelector((state) => state.not);

  const falsevalue = noti.filter((item) => item.read === false);
  const count = falsevalue.length;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products"); // Replace with your collection name

        const querySnapshot = await getDocs(productsCollection);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const productsCollection = collection(db, "category"); // Replace with your collection name
        const limitedQuery = query(productsCollection, limit(4));

        const querySnapshot = await getDocs(limitedQuery);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

       setCategory(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategory();
  }, []);

  const [Fontsloaded] = useFonts({
    indieflower: require("../assets/fonts/IndieFlower-Regular.ttf"),
    Outfit: require("../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf"),
    "Red-Hat": require("../assets/fonts/RedHatDisplay-Medium.ttf"),
  });
  if (!Fontsloaded) {
    return undefined;
  }

  const numColumns = 3;
  const numColumns2 = 2;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark"/>
      <View style={styles.homeContainer}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Rect width="24" height="24" fill="white" />
              <Rect x="3" y="2" width="15" height="4" rx="2" fill="black" />
              <Rect x="3" y="10" width="20" height="4" rx="2" fill="black" />
              <Rect x="3" y="18" width="12" height="4" rx="2" fill="black" />
            </Svg>
          </TouchableOpacity>
          <View
            style={{
              padding: 10,
              backgroundColor: "#E7E7E7",
              width: "60%",
              borderRadius: 8,
            }}
          >
            <TextInput
              placeholder="Something"
              style={{ height: 20, textAlign: "center" }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("cart")}
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* if (falsevalue.length > 0) {
                return (
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
                        d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                        stroke="#8E8D8D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M14.3888 20.8572C13.0247 22.3719 10.8967 22.3899 9.51947 20.8572"
                        stroke="#8E8D8D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                    <View
                      style={{
                        left: 12,
                        top: 0,
                        position: "absolute",
                        backgroundColor: "darkred",
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ textAlign: "center", color: "white" }}>
                        {falsevalue.length}
                      </Text>
                    </View>
                  </View>
                );
              } else {
                return (
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
                      d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                      stroke="#8E8D8D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M14.3888 20.8572C13.0247 22.3719 10.8967 22.3899 9.51947 20.8572"
                      stroke="#8E8D8D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                );
              } */}

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
                d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                stroke="#8E8D8D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M14.3888 20.8572C13.0247 22.3719 10.8967 22.3899 9.51947 20.8572"
                stroke="#8E8D8D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          {/* <Bottom.Screen
            name="Notification"
            options={{
              tabBarLabel: false,
              tabBarIcon: ({ color }) => {
                if (falsevalue.length > 0) {
                  return (
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
                          d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                          stroke="#8E8D8D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M14.3888 20.8572C13.0247 22.3719 10.8967 22.3899 9.51947 20.8572"
                          stroke="#8E8D8D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                      <View
                        style={{
                          left: 12,
                          top: 0,
                          position: "absolute",
                          backgroundColor: "darkred",
                          width: 15,
                          height: 15,
                          borderRadius: 10,
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ textAlign: "center", color: "white" }}>
                          {falsevalue.length}
                        </Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
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
                        d="M12 17.8476C17.6392 17.8476 20.2481 17.1242 20.5 14.2205C20.5 11.3188 18.6812 11.5054 18.6812 7.94511C18.6812 5.16414 16.0452 2 12 2C7.95477 2 5.31885 5.16414 5.31885 7.94511C5.31885 11.5054 3.5 11.3188 3.5 14.2205C3.75295 17.1352 6.36177 17.8476 12 17.8476Z"
                        stroke="#8E8D8D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M14.3888 20.8572C13.0247 22.3719 10.8967 22.3899 9.51947 20.8572"
                        stroke="#8E8D8D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                  );
                }
              },
            }}
            component={NotoficationScreen}
          /> */}
          <TouchableOpacity onPress={handelLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.discover}>
            <ImageBackground
              source={require("../assets/image/header.png")}
              style={styles.firstPost}
            >
              <View style={{ padding: 20, gap: 10 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                    fontFamily: "Red-Hat",
                    fontWeight: 200,
                  }}
                >
                  Discover our amazing selection of packages for kids'
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("assist")}
                  style={styles.shopBtn}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "white",
                      fontFamily: "Red-Hat",
                    }}
                  >
                    Shop Now
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.category}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 16, fontFamily: "Red-Hat", fontWeight: 600 }}
              >
                Categories
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("category")}>
                <Text style={{ fontSize: 14, color: "#FFB648" }}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.categoryContainAll}>
              <View style={styles.categoryContain}>
                <TouchableOpacity onPress={()=> navigation.navigate('product', {cate:'Toys'})}
                  style={{
                    backgroundColor: "#FFF4E3",
                    height: 150,
                    width: 100,
                    alignItems: "center",
                    paddingVertical: 15,
                    paddingHorizontal: 9,
                    gap: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    New Products
                  </Text>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="52"
                    viewBox="0 0 51 52"
                    fill="none"
                  >
                    <Path
                      d="M42.7859 49.5539L10.6694 1.82067L12.2482 0.671982L44.3647 48.4052L42.7859 49.5539Z"
                      fill="#8C8C8C"
                    />
                    <Path
                      d="M46.4446 48.9795C46.4446 50.2059 45.4886 51.2 44.3094 51.2H43.5753L43.3534 50.9657C42.6539 50.6012 42.1741 49.8486 42.1741 48.9795C42.1741 48.1105 42.6545 47.3578 43.3534 46.9934L43.4605 46.7591H44.3094C45.4886 46.7583 46.4446 47.7525 46.4446 48.9795Z"
                      fill="#383838"
                    />
                    <Path
                      d="M43.5753 51.2C42.396 51.2 41.44 50.2059 41.44 48.9795C41.44 47.7532 42.396 46.7591 43.5753 46.7591C44.7545 46.7591 45.7105 47.7525 45.7105 48.9795C45.7105 50.2066 44.7545 51.2 43.5753 51.2Z"
                      fill="black"
                    />
                    <Path
                      d="M43.5753 50.3784C42.8322 50.3784 42.2301 49.7523 42.2301 48.9795C42.2301 48.2068 42.8322 47.5807 43.5753 47.5807C44.3183 47.5807 44.9204 48.2068 44.9204 48.9795C44.9204 49.7515 44.3183 50.3784 43.5753 50.3784Z"
                      fill="#383838"
                    />
                    <Path
                      d="M25.6238 47.8078C25.6238 49.6811 24.1632 51.2 22.3618 51.2H21.2406L20.9012 50.8413C19.8332 50.2842 19.0998 49.1348 19.0998 47.8078C19.0998 46.4809 19.8332 45.3315 20.9012 44.7744L21.065 44.4157H22.3611C24.1632 44.4157 25.6238 45.9346 25.6238 47.8078Z"
                      fill="#383838"
                    />
                    <Path
                      d="M21.2406 51.2C19.4392 51.2 17.9786 49.6811 17.9786 47.8078C17.9786 45.9346 19.4392 44.4157 21.2406 44.4157C23.042 44.4157 24.5026 45.9346 24.5026 47.8078C24.5026 49.6811 23.042 51.2 21.2406 51.2Z"
                      fill="black"
                    />
                    <Path
                      d="M21.2406 49.9442C20.1056 49.9442 19.1862 48.9874 19.1862 47.8078C19.1862 46.6282 20.1063 45.6715 21.2406 45.6715C22.3756 45.6715 23.295 46.6282 23.295 47.8078C23.295 48.9874 22.3756 49.9442 21.2406 49.9442Z"
                      fill="#383838"
                    />
                    <Path
                      d="M44.4532 43.9937V47.4851C44.4532 48.2621 43.8469 48.8925 43.0997 48.8925H32.8099C32.0627 48.8925 31.4565 48.2621 31.4565 47.4851V43.9937H44.4532Z"
                      fill="#F9DE67"
                    />
                    <Path
                      d="M34.2083 43.9937V47.4851C34.2083 48.2621 33.6021 48.8925 32.8548 48.8925H14.7568C14.0095 48.8925 13.4033 48.2621 13.4033 47.4851V43.9937H34.2083Z"
                      fill="#FFB648"
                    />
                    <Path
                      d="M16.2167 47.8078C16.2167 49.6811 14.7561 51.2 12.9547 51.2H11.8335L11.4941 50.8413C10.4261 50.2842 9.69272 49.1348 9.69272 47.8078C9.69272 46.4809 10.4261 45.3315 11.4941 44.7744L11.6579 44.4157H12.954C14.7561 44.4157 16.2167 45.9346 16.2167 47.8078Z"
                      fill="#383838"
                    />
                    <Path
                      d="M11.8335 51.2C10.0321 51.2 8.57153 49.6811 8.57153 47.8078C8.57153 45.9346 10.0321 44.4157 11.8335 44.4157C13.6349 44.4157 15.0955 45.9346 15.0955 47.8078C15.0955 49.6811 13.6349 51.2 11.8335 51.2Z"
                      fill="black"
                    />
                    <Path
                      d="M11.8335 49.9442C10.6985 49.9442 9.77911 48.9874 9.77911 47.8078C9.77911 46.6282 10.6992 45.6715 11.8335 45.6715C12.9678 45.6715 13.8879 46.6282 13.8879 47.8078C13.8879 48.9874 12.9685 49.9442 11.8335 49.9442Z"
                      fill="#383838"
                    />
                    <Path
                      d="M34.5422 48.9795C34.5422 50.2059 33.5862 51.2 32.4069 51.2H31.6728L31.4509 50.9657C30.7514 50.6012 30.2717 49.8486 30.2717 48.9795C30.2717 48.1105 30.7521 47.3578 31.4509 46.9934L31.5581 46.7591H32.4069C33.5862 46.7583 34.5422 47.7525 34.5422 48.9795Z"
                      fill="#383838"
                    />
                    <Path
                      d="M31.6728 51.2C30.4936 51.2 29.5376 50.2059 29.5376 48.9795C29.5376 47.7532 30.4936 46.7591 31.6728 46.7591C32.8521 46.7591 33.8081 47.7532 33.8081 48.9795C33.8081 50.2059 32.8521 51.2 31.6728 51.2Z"
                      fill="black"
                    />
                    <Path
                      d="M31.6728 50.3784C30.9297 50.3784 30.3276 49.7523 30.3276 48.9795C30.3276 48.2068 30.9297 47.5807 31.6728 47.5807C32.4159 47.5807 33.0179 48.2068 33.0179 48.9795C33.0179 49.7515 32.4159 50.3784 31.6728 50.3784Z"
                      fill="#383838"
                    />
                    <Path
                      d="M11.8328 48.8099C11.6517 48.8099 11.4678 48.7567 11.3054 48.6453C10.8602 48.3419 10.7365 47.7201 11.0282 47.2579L20.4567 32.312C20.7484 31.8491 21.3457 31.7204 21.7908 32.0238C22.236 32.3271 22.3597 32.9489 22.068 33.4111L12.6395 48.357C12.4542 48.651 12.1466 48.8099 11.8328 48.8099Z"
                      fill="#8C8C8C"
                    />
                    <Path
                      d="M50.6336 26.2264C50.5382 28.4368 48.8149 30.2296 46.6886 30.2296H19.3473C17.2217 30.2296 15.4978 28.4375 15.4978 26.2264V16.2965H25.4814C25.4814 16.0844 25.4869 15.8731 25.4966 15.6632H25.4295V3.32806H37.7613C37.8262 3.32734 37.8905 3.32518 37.9555 3.32518C44.8444 3.32518 50.5389 9.13261 50.6342 16.2965V26.2264H50.6336Z"
                      fill="#F9DE67"
                    />
                    <Path
                      d="M38.0972 16.2965V26.2264C38.0972 28.4368 36.4223 30.2296 34.3562 30.2296H7.78558C5.71946 30.2296 4.04459 28.4375 4.04459 26.2264V16.2965H25.4295V3.32806C25.4945 3.32734 25.5588 3.32518 25.6237 3.32518C32.5126 3.32518 38.0972 9.13261 38.0972 16.2965Z"
                      fill="#FFB648"
                    />
                    <Path
                      d="M31.6735 49.9816C31.3624 49.9816 31.0576 49.8256 30.8717 49.5366L0.162583 1.80342C-0.0351121 1.49576 -0.0537756 1.1004 0.113505 0.774056C0.280785 0.447707 0.607742 0.244278 0.963731 0.244278H11.4588C11.9911 0.244278 12.4224 0.692828 12.4224 1.24633C12.4224 1.79983 11.9911 2.24838 11.4588 2.24838H2.76787L32.474 48.4217C32.7698 48.8818 32.6509 49.5043 32.2085 49.8119C32.044 49.9269 31.8581 49.9816 31.6735 49.9816Z"
                      fill="#D1D1D1"
                    />
                  </Svg>
                </TouchableOpacity>
                <View style={{ flexWrap: "wrap", gap: 8 }}>
                <FlatList
                numColumns={numColumns2}
                data={category}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity key={index} onPress={()=> navigation.navigate('product', {cate:`${item.catName}`})}
                    style={{
                      backgroundColor: "#FFF4E3",
                      height: 70,
                      width: 110,
                      alignItems: "center",
                      padding: 5,
                      gap: 7,
                    }}
                  >
                    <Svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <Path
                        d="M22.7001 8.91041L19.7331 7.75255L20.833 16.7839L11.2021 19.2L10.095 10.0765L7.45226 12.6525L4.66669 6.77708L9.16361 2.40999L11.5649 1.7952C11.6823 2.60452 12.0141 3.31683 12.4905 3.78191C12.9669 4.247 13.5506 4.42851 14.1184 4.28817C14.6863 4.14783 15.194 3.69661 15.5344 3.02967C15.8748 2.36272 16.0214 1.53217 15.9433 0.713161L18.7874 0L24 2.04931L22.7001 8.91041Z"
                        fill="#FFB648"
                      />
                      <Path
                        d="M14.6667 23.0971L8.95264 24L8.11311 13.07L5.3929 23.6322L0 20.7727L3.86647 5.75999L13.4441 7.18771L14.6667 23.0971Z"
                        fill="#F9DE67"
                      />
                    </Svg>
                    <Text
                      style={{
                        textAlign: "center",
                        fontWeight: 300,
                        fontSize: 14,
                      }}
                    >
                      {item.catName}
                    </Text>
                  </TouchableOpacity>
                  );
                }}
                scrollEnabled={false}
              />
                </View>
              </View>
             
            </View>
          </View>
          <View style={styles.hotsale}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                paddingHorizontal: 20,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 16, fontFamily: "Outfit", fontWeight: 600 }}
              >
                Hote sales
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14, color: "#FFB648" }}>View all</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingLeft: 20,
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {products?.map((item, index) => (
                  <HotSales data={item} key={index} />
                ))}
              </ScrollView>
            </View>
          </View>
          <View style={styles.allproduct}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ fontSize: 16, fontFamily: "Outfit", fontWeight: 600 }}
              >
                Products
              </Text>
              <TouchableOpacity>
                <Text style={{ fontSize: 14, color: "#FFB648" }}>View all</Text>
              </TouchableOpacity>
            </View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              {!products ? (
                <Text>Loading....</Text>
              ) : (
                <FlatList
                  numColumns={numColumns2}
                  data={products}
                  renderItem={({ item, index }) => {
                    return <Product data={item} key={index} />;
                  }}
                  scrollEnabled={false}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    gap: 4,
    paddingTop: 14,
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 8,
    alignItems: "center",
    width: "100%",
  },
  discover: {
    height: 140,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  firstPost: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  shopBtn: {
    height: 36,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFB648",
  },
  category: {
    padding: 20,
    gap: 10,
  },
  categoryContain: {
    gap: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 150,
  },
  categoryContainAll: {
    width: "100%",
    gap: 16,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  cate: {
    width: "40%",
    height: 80,
    marginRight: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF4E3",
  },
  hotsale: {
    gap: 16,
  },
  allproduct: {
    padding: 20,
  },
});

export default HomeScreen;
