import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const AssistanceScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.iconStyle}>
              <Icon name="arrow-left" size={28} color={"black"} />
            </Text>
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <Text style={styles.title}>Collection 0123</Text>
          </View>
        </View>

        <View style={styles.titleContent}>
          <Text style={styles.titleContentText}>
            Lorem ipsum dolor sit amet consectetur. Sit vulputate nunc s
          </Text>
        </View>
        <View style={styles.ProductList}>
          <TouchableOpacity
            onPress={() => navigation.navigate("assproductlist")}
          >
            <View style={styles.ProductContent}>
              <Image
                source={require("../assets/shoe.jpg")}
                style={styles.ProductImg}
              />
              <View style={styles.text}>
                <Text style={styles.ProductType}>Shirts</Text>
                <Text style={styles.quantity}>5 Pieces</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("assproductlist")}
          >
            <View style={styles.ProductContent}>
              <Image
                source={require("../assets/shoe.jpg")}
                style={styles.ProductImg}
              />

              <View style={styles.text}>
                <Text style={styles.ProductType}>Trousers</Text>
                <Text style={styles.quantity}>5 Pieces</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("assproductlist")}
          >
            <View style={styles.ProductContent}>
              <Image
                source={require("../assets/shoe.jpg")}
                style={styles.ProductImg}
              />

              <View style={styles.text}>
                <Text style={styles.ProductType}>Pants</Text>
                <Text style={styles.quantity}>5 Pieces</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("assproductlist")}
          >
            <View style={styles.ProductContent}>
              <View></View>
              <Image
                source={require("../assets/shoe.jpg")}
                style={styles.ProductImg}
              />
              <View style={styles.text}>
                <Text style={styles.ProductType}>T-shirts</Text>
                <Text style={styles.quantity}>5 Pieces</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.CheckOut}>
          <View style={styles.TotalPrice}>
            <Text style={styles.CheckoutText}>Total</Text>
            <View style={styles.Price}>
              <Text style={styles.PriceTextContent}>130 000</Text>
              <Text style={styles.Currency}>Rwf</Text>
            </View>
          </View>
          <Text style={styles.button}>Check it out</Text>
        </View>
      </View>
    </>
  );
};

export default AssistanceScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    // alignItems: 'center',

    width: "100%",
    height: "100%",
  },
  header: {
    paddingVertical: 31,
    color: "black",
  },
  iconStyle: {
    // flexDirection: 'flex-start',
    color: "#fff",
    paddingTop: 0,
    marginHorizontal: 2,
    paddingLeft: 30,
    paddingRight: 45,
    paddingBottom: 45,
    position: "absolute",
  },
  titleHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 18,
  
  },
  titleContent: {
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#ffb648",
    marginHorizontal: 24,
    marginTop: 2,
  },

  titleContentText: {
    color: "#fff",
    fontSize: 16,

    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  ProductList: {
    marginTop: 28,
  },
  ProductContent: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: "#fffbd3",
    height: 95,
    padding: 0,
    margin: 0,
    flexDirection: "row",
  },

  ProductType: {
    paddingHorizontal: 28,
    paddingTop: 16,
    fontSize: 18,
  
    color: "#696969",
  },
  quantity: {
    paddingHorizontal: 28,
    paddingBottom: 16,
    fontSize: 18,
  
    color: "#696969",
  },
  ProductImg: {
    width: 95,
    height: 95,
    marginVertical: 0,
    paddingVertical: 0,
  },
  CheckOut: {
    marginTop: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TotalPrice: {
    padding: 6,
  },
  CheckoutText: {
    paddingHorizontal: 24,
    color: "#696969",
  },
  PriceTextContent: {
    paddingLeft: 24,
    paddingTop: 4,
    fontSize: 16,

    color: "#000",
  },
  button: {
    paddingHorizontal: 38,
    paddingVertical: 18,
    backgroundColor: "#ffb648",
 
    color: "#fff",
    width: "45%",
    marginRight: 28,
  },
  Price: {
    flexDirection: "row",
  },
  Currency: {
    paddingHorizontal: 4,
    paddingTop: 5.5,
    fontSize: 14,
  
    color: "#696969",
  },
});
