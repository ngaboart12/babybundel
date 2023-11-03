import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

const Product = (props) => {
  const navigation = useNavigation();

  const { name, url, price, _id } = props.data;
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const [Fontsloaded] = useFonts({
    indieflower: require("../assets/fonts/IndieFlower-Regular.ttf"),
    outfit: require("../assets/fonts/NotoSansNKoUnjoined-VariableFont_wght.ttf"),
  });
  if (!Fontsloaded) {
    return undefined;
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("single", { id: _id })}
      style={{
        width: 150,
        minHeight: 200,
        marginRight: 20,
        marginTop: 10,
        backgroundColor: "#f4f4f4",
      }}
    >
      <View style={{ width: 150, height: 140 }}>
        <Image
          source={{ uri: `${url}` }}
          style={{ width: "100%", height: 140, objectFit: "contain" }}
        />
      </View>
      <View
        style={{
          width: "100%",
          padding: 6,
          gap: 5,
          marginRight: 15,
        }}
      >
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>{name}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",

            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "outfit", fontSize: 18, fontWeight: 600 }}>
            ${price}
          </Text>
          <TouchableOpacity onPress={() => addItemToCart(props.data)}>
            <AntDesign name="pluscircle" size={24} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
