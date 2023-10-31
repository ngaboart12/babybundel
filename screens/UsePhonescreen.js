import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Svg, { Path, Rect } from "react-native-svg";
import { useRegisterMutation } from "../redux/apiSlice/userApiAlice";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { addUser } from "../redux/Slices/userSlice";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Pattaya: require("../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf"),
  });

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async () => {
    await axios
      .post("http://192.168.1.66:6000/api/auth/register", {
        email: email,
        phone: phone,
        password: password,
      })
      .then((response) => {
        navigation.navigate("verify", {
          userId: response.data.data.userId,
          email: response.data.data.email,
        });
      });
  };

  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/image/header.png")}
        style={{ width: "100%", height: 200 }}
      ></ImageBackground>
      <View style={{ padding: 20, gap: 24 }}>
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 16, color: "#000", fontWeight: 400 }}>
            Welcome Back
          </Text>
          <Text
            style={{ height: 2, width: 50, backgroundColor: "#000" }}
          ></Text>
          <Text style={{ fontSize: 34, color: "#FFB648", fontWeight: 700 }}>
            Sign In
          </Text>
        </View>
        <View>
          <ScrollView>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <View
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <Text style={{ fontSize: 16, color: "#000", fontWeight: 400 }}>
                  Full Name
                </Text>
                <View
                  style={{
                    height: 60,
                    backgroundColor: "#EAE6E6",
                    padding: 10,
                  }}
                >
                  <TextInput
                    placeholder="Your full name"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
              </View>
              <View
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <Text style={{ fontSize: 16, color: "#000", fontWeight: 400 }}>
                  Phone number
                </Text>
                <View
                  style={{
                    height: 60,
                    backgroundColor: "#EAE6E6",
                    padding: 10,
                  }}
                >
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Phone Number"
                    style={styles.input}
                    onChangeText={(text) => setPhone(text)}
                  />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#007be5",
                      fontWeight: 400,
                    }}
                  >
                    use Email instead
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ gap: 10 }}>
                <TouchableOpacity
                  onPress={handelSubmit}
                  style={{
                    backgroundColor: "#FFB648",
                    height: 60,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 24 }}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View></View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    width: "80%",
    height: "100%",
  },
});

export default RegisterScreen;
