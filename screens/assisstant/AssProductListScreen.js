import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import IconFont from "react-native-vector-icons/Ionicons";

const AssitProductScreen = ({ navigation }) => {
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
            <Text style={styles.title}>T-shirts</Text>
          </View>
        </View>

        <View style={styles.titleContent}>
          <Text style={styles.titleContentText}>Products</Text>
          <Text style={styles.titleContentText}> (3)</Text>
        </View>
        <View style={styles.ProductList}>
          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.productContent}>
              <View>
                <Text style={styles.iconStyleClose}>
                  <IconFont name="close-outline" size={18} color={"black"} />
                </Text>
              </View>

              <Image
                source={require("../../assets/image/shoe.jpg")}
                style={styles.ProductImg}
              />
              <View style={styles.text}>
                <Text style={styles.producName}>Long Sleeve shirt</Text>
                <Text style={styles.productCategoryText}>Clothes/shirt</Text>
                <View style={styles.Price}>
                  <Text style={styles.PriceContent}>2000</Text>
                  <Text style={styles.PriceContentCurrency}>Rwf</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.productContent}>
              <View>
                <Text style={styles.iconStyleClose}>
                  <IconFont name="close-outline" size={18} color={"black"} />
                </Text>
              </View>

              <Image
                source={require("../../assets/image/shoe.jpg")}
                style={styles.ProductImg}
              />

              <View style={styles.text}>
                <Text style={styles.producName}>Long Sleeve shirt</Text>
                <Text style={styles.productCategoryText}>Clothes/shirt</Text>
                <View style={styles.Price}>
                  <Text style={styles.PriceContent}>2000</Text>
                  <Text style={styles.PriceContentCurrency}>Rwf</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.productContent}>
              <View>
                <Text style={styles.iconStyleClose}>
                  <IconFont name="close-outline" size={18} color={"black"} />
                </Text>
              </View>

              <Image
                source={require("../../assets/image/shoe.jpg")}
                style={styles.ProductImg}
              />

              <View style={styles.text}>
                <Text style={styles.producName}>Long Sleeve shirt</Text>
                <Text style={styles.productCategoryText}>Clothes/shirt</Text>
                <View style={styles.Price}>
                  <Text style={styles.PriceContent}>2000</Text>
                  <Text style={styles.PriceContentCurrency}>Rwf</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.productContent}>
              <View>
                <Text style={styles.iconStyleClose}>
                  <IconFont name="close-outline" size={18} color={"black"} />
                </Text>
              </View>
              <Image
                source={require("../../assets/image/shoe.jpg")}
                style={styles.ProductImg}
              />
              <View style={styles.text}>
                <Text style={styles.producName}>Long Sleeve shirt</Text>
                <Text style={styles.productCategoryText}>Clothes/shirt</Text>
                <View style={styles.Price}>
                  <Text style={styles.PriceContent}>2000</Text>
                  <Text style={styles.PriceContentCurrency}>Rwf</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AssitProductScreen;

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
    marginTop: 14,
    flexDirection: "row",
    marginHorizontal: 3,
  },

  titleContentText: {
    color: "#666666",
    fontSize: 16,
   
    paddingVertical: 5,
    paddingLeft: 25,
    paddingRight: 5,
  },
  iconStyleClose: {
    color: "#000",

    marginHorizontal: 1,
    padding: 0.2,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 40,
    borderRadius: 4,
    marginRight: 16,
  },
  ProductList: {
    marginTop: 25,
  },
  productContent: {
    marginTop: 13,
    marginHorizontal: 24,
    backgroundColor: "#fff",
    height: 95,
    padding: 0,
    margin: 0,
    flexDirection: "row",
  },

  producName: {
    paddingHorizontal: 28,
    paddingTop: 10,
    fontSize: 16,
 
    color: "#000",
  },
  productCategoryText: {
    paddingHorizontal: 28,
    paddingTop: 8,
    fontSize: 14,
 
    color: "#696969",
  },
  PriceContent: {
    paddingLeft: 28,
    paddingTop: 8,
    fontSize: 16,
   
    color: "#000",
  },
  PriceContentCurrency: {
    paddingHorizontal: 4,
    paddingTop: 10,
    fontSize: 14,
 
    color: "#696969",
  },
  Price: {
    flexDirection: "row",
  },

  ProductImg: {
    width: 95,
    height: 95,
    marginVertical: 0,
    paddingVertical: 0,
  },
});
