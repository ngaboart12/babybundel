import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { skipLogin } from "../redux/Slices/skipSlice";

const OnboardingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const skiplogin = () => {
    dispatch(skipLogin());
    navigation.navigate("homeTab");
  };
  // if you login skip goto home page



  // if you skip login goto home page

  const [fontsLoaded] = useFonts({
    indieflower: require("../assets/fonts/IndieFlower-Regular.ttf"),
    outfit: require("../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf"),
    Arimo: require("../assets/fonts/Arimo-VariableFont_wght.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <StatusBar style="light" />
      <ImageBackground
        style={{ flex: 1, flexDirection: "column" }}
        source={require("../assets/image/background.png")}
      >
        <View style={{ position: "absolute", bottom: 8, padding: 20, gap: 23 }}>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 34,
              color: "#FFB648",
              fontFamily: "Arimo",
            }}
          >
            Welcome!
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              fontSize: 20,
              fontFamily: "Arimo",
            }}
          >
            Lacus egestas risus nunc turpis odio. Nisi sagittis id tristique
            consequat dignissim malesuada id semper elit. Odio vitae sit.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("login")}
            style={{
              padding: 16,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FFB648",
              borderRadius: 8,
            }}
          >
            <Text
              style={{ fontSize: 24, color: "white", fontFamily: "outfit" }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{ color: "white", fontSize: 16, fontFamily: "outfit" }}
              >
                Terms and conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{ color: "white", fontSize: 16, fontFamily: "outfit" }}
                onPress={skiplogin}
              >
                Skip Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardingScreen;
