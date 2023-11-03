import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/apiSlice/userApiAlice";
import Svg, { Path, Rect } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import { addUser } from "../redux/Slices/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handelSubmit = async (req, res) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        const user = auth.currentUser;
        if (user && user.emailVerified === true) {
          navigation.navigate("homeTab");
        } else {
          window.alert("verify you email");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <StatusBar style="light" />
      <ImageBackground
        source={require("../assets/image/header.png")}
        style={{ width: "100%", height: 200 }}
      ></ImageBackground>
      <View style={{ height: "70%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20, gap: 24 }}>
            <View style={{ gap: 8 }}>
              <Text style={{ fontSize: 16, color: "#000", fontWeight: 400 }}>
                Welcome Back
              </Text>
              <Text
                style={{ height: 2, width: 50, backgroundColor: "#000" }}
              ></Text>
              <Text style={{ fontSize: 32, color: "#FFB648", fontWeight: 800 }}>
                Sign In
              </Text>
            </View>

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
                  Email account
                </Text>
                <View
                  style={{
                    height: 60,
                    backgroundColor: "#EAE6E6",
                    padding: 10,
                  }}
                >
                  <TextInput
                    placeholder="Email account"
                    style={styles.input}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("phone")}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#007be5",
                      fontWeight: 400,
                    }}
                  >
                    use my Phone number instead
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <Text style={{ fontSize: 16, color: "#000", fontWeight: 400 }}>
                  Password
                </Text>
                <View
                  style={{
                    height: 60,
                    backgroundColor: "#EAE6E6",
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TextInput
                    secureTextEntry
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <Svg
                    width="11"
                    height="11"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ padding: 23 }}
                  >
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0029 4.00049C16.1389 4.00349 19.8529 6.90249 21.9389 11.7565C22.0209 11.9455 22.0209 12.1595 21.9389 12.3485C19.8539 17.2035 16.1389 20.1025 12.0029 20.1055H11.9969C7.8609 20.1025 4.1469 17.2035 2.0609 12.3485C1.9799 12.1595 1.9799 11.9455 2.0609 11.7565C4.1469 6.90249 7.8619 4.00349 11.9969 4.00049H12.0029ZM11.9999 5.50049C8.5639 5.50149 5.4299 7.94449 3.5699 12.0525C5.4299 16.1615 8.5629 18.6045 11.9999 18.6055C15.4369 18.6045 18.5699 16.1615 20.4299 12.0525C18.5699 7.94449 15.4369 5.50149 11.9999 5.50049ZM11.9996 8.14129C14.1566 8.14129 15.9116 9.89629 15.9116 12.0533C15.9116 14.2093 14.1566 15.9633 11.9996 15.9633C9.8426 15.9633 8.0886 14.2093 8.0886 12.0533C8.0886 9.89629 9.8426 8.14129 11.9996 8.14129ZM11.9996 9.64129C10.6696 9.64129 9.5886 10.7233 9.5886 12.0533C9.5886 13.3823 10.6696 14.4633 11.9996 14.4633C13.3296 14.4633 14.4116 13.3823 14.4116 12.0533C14.4116 10.7233 13.3296 9.64129 11.9996 9.64129Z"
                      fill="#B8B8B8"
                    />
                  </Svg>
                </View>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#007be5",

                      fontWeight: 400,
                    }}
                  >
                    Forgot password?
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
                <TouchableOpacity
                  onPress={() => navigation.navigate("register")}
                  style={{ justifyContent: "center" }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      gap: 8,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      Don't have account?
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#59a6ff",
                      }}
                    >
                      Register
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={{
                    paddingTop: 10,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 8,
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
                      d="M5.96631 14.5035L5.17775 17.6222L2.29559 17.6868C1.43425 15.9943 0.945679 14.0578 0.945679 12C0.945679 10.0101 1.40248 8.13362 2.21219 6.48132H2.21281L4.77874 6.9797L5.90278 9.68176C5.66752 10.4084 5.53929 11.1884 5.53929 12C5.53938 12.8809 5.68999 13.7249 5.96631 14.5035Z"
                      fill="#FBBB00"
                    />
                    <Path
                      d="M23.4019 9.75824C23.532 10.4841 23.5998 11.2338 23.5998 12C23.5998 12.8591 23.5146 13.6971 23.3521 14.5055C22.8007 17.2563 21.3599 19.6582 19.364 21.358L19.3634 21.3574L16.1315 21.1827L15.6741 18.1576C16.9984 17.3347 18.0334 16.047 18.5787 14.5055H12.5218V9.75824H23.4019Z"
                      fill="#518EF8"
                    />
                    <Path
                      d="M19.3634 21.3574L19.364 21.358C17.4229 23.011 14.957 24 12.2728 24C7.95913 24 4.20876 21.4457 2.29559 17.6868L5.96632 14.5035C6.92288 17.2081 9.38559 19.1334 12.2728 19.1334C13.5137 19.1334 14.6763 18.778 15.674 18.1576L19.3634 21.3574Z"
                      fill="#28B446"
                    />
                    <Path
                      d="M19.5028 2.76262L15.8333 5.94525C14.8008 5.26153 13.5803 4.86656 12.2728 4.86656C9.32024 4.86656 6.81147 6.88017 5.90282 9.68175L2.21281 6.48131H2.21219C4.09735 2.63077 7.89502 0 12.2728 0C15.0211 0 17.5411 1.03716 19.5028 2.76262Z"
                      fill="#F14336"
                    />
                  </Svg>

                  {/* <AntDesign name="google" size={32} color="orange" /> */}
                  <Text style={{ fontSize: 16 }}>Sign In With Google</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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

export default LoginScreen;
