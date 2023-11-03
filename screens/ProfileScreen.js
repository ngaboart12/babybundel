import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import Icon from "react-native-vector-icons/Feather";
import IconFont from "react-native-vector-icons/Ionicons";

const AssitProductScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.header}>
          <View
            style={{
              height: 56,
              width: 56,
              borderRadius: "50%",
              backgroundColor: "#ffe6c1",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 26,
            }}
          >
            <Text
              style={{
                fontWeight: 700,
                fontSize: 24,
                color: "#ffb547",
              }}
            >
              A
            </Text>
          </View>
          <View>
            <View style={styles.text}>
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                Amily
              </Text>

              <Text
                style={{
                  paddingTop: 4,
                  fontSize: 14,

                  color: "#696969",
                }}
              >
                0787087902
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.ProductList}>
          <View style={styles.productContent}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  height: 42,
                  width: 42,
                  borderRadius: "1%",
                  backgroundColor: "#fff8ed",
                  justifyContent: "center",
                  alignItems: "center",

                  padding: 9,
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
                    d="M12 2C9.38002 2 7.25002 4.13 7.25002 6.75C7.25002 9.32 9.26002 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49H12.17C13.3994 11.449 14.5646 10.9315 15.4193 10.0469C16.274 9.16234 16.7512 7.98004 16.75 6.75C16.75 4.13 14.62 2 12 2ZM17.08 14.149C14.29 12.289 9.74002 12.289 6.93002 14.149C5.66002 14.999 4.96002 16.149 4.96002 17.379C4.96002 18.609 5.66002 19.749 6.92002 20.589C8.32002 21.529 10.16 21.999 12 21.999C13.84 21.999 15.68 21.529 17.08 20.589C18.34 19.739 19.04 18.599 19.04 17.359C19.03 16.129 18.34 14.989 17.08 14.149Z"
                    fill="black"
                  />
                </Svg>
              </View>

              <View style={styles.producName}>
                <Text>delivery address</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={styles.iconStyleClose}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M8.94995 4.08L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.94995 19.92"
                    stroke="#909192"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProductList}>
          <View style={styles.productContent}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  height: 42,
                  width: 42,
                  borderRadius: "1%",
                  backgroundColor: "#fff8ed",
                  justifyContent: "center",
                  alignItems: "center",

                  padding: 9,
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
                    d="M12 2C9.38002 2 7.25002 4.13 7.25002 6.75C7.25002 9.32 9.26002 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49H12.17C13.3994 11.449 14.5646 10.9315 15.4193 10.0469C16.274 9.16234 16.7512 7.98004 16.75 6.75C16.75 4.13 14.62 2 12 2ZM17.08 14.149C14.29 12.289 9.74002 12.289 6.93002 14.149C5.66002 14.999 4.96002 16.149 4.96002 17.379C4.96002 18.609 5.66002 19.749 6.92002 20.589C8.32002 21.529 10.16 21.999 12 21.999C13.84 21.999 15.68 21.529 17.08 20.589C18.34 19.739 19.04 18.599 19.04 17.359C19.03 16.129 18.34 14.989 17.08 14.149Z"
                    fill="black"
                  />
                </Svg>
              </View>

              <View style={styles.producName}>
                <Text>Long Sleeve shirt</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={styles.iconStyleClose}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M8.94995 4.08L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.94995 19.92"
                    stroke="#909192"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProductList}>
          <View style={styles.productContent}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  height: 42,
                  width: 42,
                  borderRadius: "1%",
                  backgroundColor: "#fff8ed",
                  justifyContent: "center",
                  alignItems: "center",

                  padding: 9,
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
                    d="M8 7.5V5.5C8 4 9 3 10.5 3H13.5C15 3 16 4 16 5.5V7.5"
                    stroke="#E43C6F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M8.19495 8H15.798C19.3883 8 19.7474 9.23097 19.9902 10.7329L20.9406 16.5394C21.2469 18.4439 20.4443 20 16.7484 20H7.25513C3.54864 20 2.7461 18.4439 3.06289 16.5394L4.01327 10.7329C4.24559 9.23097 4.60462 8 8.19495 8Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>

              <View style={styles.producName}>
                <Text>My orders</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={styles.iconStyleClose}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M8.94995 4.08L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.94995 19.92"
                    stroke="#909192"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProductList}>
          <View style={styles.productContent}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  height: 42,
                  width: 42,
                  borderRadius: "1%",
                  backgroundColor: "#fff8ed",
                  justifyContent: "center",
                  alignItems: "center",

                  padding: 9,
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
                    d="M12 2C9.38002 2 7.25002 4.13 7.25002 6.75C7.25002 9.32 9.26002 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49H12.17C13.3994 11.449 14.5646 10.9315 15.4193 10.0469C16.274 9.16234 16.7512 7.98004 16.75 6.75C16.75 4.13 14.62 2 12 2ZM17.08 14.149C14.29 12.289 9.74002 12.289 6.93002 14.149C5.66002 14.999 4.96002 16.149 4.96002 17.379C4.96002 18.609 5.66002 19.749 6.92002 20.589C8.32002 21.529 10.16 21.999 12 21.999C13.84 21.999 15.68 21.529 17.08 20.589C18.34 19.739 19.04 18.599 19.04 17.359C19.03 16.129 18.34 14.989 17.08 14.149Z"
                    fill="black"
                  />
                </Svg>
              </View>

              <View style={styles.producName}>
                <Text>Long Sleeve shirt</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={styles.iconStyleClose}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M8.94995 4.08L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.94995 19.92"
                    stroke="#909192"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.ProductList}>
          <View style={styles.productContent}>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View
                style={{
                  height: 42,
                  width: 42,
                  borderRadius: "1%",
                  backgroundColor: "#fff8ed",
                  justifyContent: "center",
                  alignItems: "center",

                  padding: 9,
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
                    d="M21.75 7.998C21.75 8.408 21.41 8.748 21 8.748H3C2.59 8.748 2.25 8.408 2.25 7.998C2.25 7.588 2.59 7.248 3 7.248H4.02L4.4 5.438C4.76 3.688 5.51 2.078 8.49 2.078H15.51C18.49 2.078 19.24 3.688 19.6 5.438L19.98 7.248H21C21.41 7.248 21.75 7.588 21.75 7.998ZM22.182 13.66C22.032 12.01 21.592 10.25 18.382 10.25H5.621C2.411 10.25 1.981 12.01 1.821 13.66L1.261 19.75C1.191 20.51 1.441 21.27 1.961 21.84C2.491 22.42 3.241 22.75 4.041 22.75H5.921C7.541 22.75 7.851 21.82 8.051 21.21L8.251 20.61C8.481 19.92 8.541 19.75 9.441 19.75H14.561C15.461 19.75 15.491 19.85 15.751 20.61L15.951 21.21C16.151 21.82 16.461 22.75 18.081 22.75H19.961C20.751 22.75 21.511 22.42 22.041 21.84C22.561 21.27 22.811 20.51 22.741 19.75L22.182 13.66ZM9.002 15.75H6.002C5.592 15.75 5.252 15.41 5.252 15C5.252 14.59 5.592 14.25 6.002 14.25H9.002C9.412 14.25 9.752 14.59 9.752 15C9.752 15.41 9.412 15.75 9.002 15.75ZM18.002 15.75H15.002C14.592 15.75 14.252 15.41 14.252 15C14.252 14.59 14.592 14.25 15.002 14.25H18.002C18.412 14.25 18.752 14.59 18.752 15C18.752 15.41 18.412 15.75 18.002 15.75Z"
                    fill="black"
                  />
                </Svg>
              </View>

              <View style={styles.producName}>
                <Text>Long Sleeve shirt</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("")}>
              <View style={styles.iconStyleClose}>
                <Svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M8.94995 4.08L15.47 10.6C16.24 11.37 16.24 12.63 15.47 13.4L8.94995 19.92"
                    stroke="#909192"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AssitProductScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 68,

    width: "100%",
    height: "100%",
  },
  header: {
    paddingVertical: 31,

    backgroundColor: "#fff8ed",
    flexDirection: "row",
    gap: 15,
  },

  iconStyleClose: {
    height: 42,
    width: 42,

    justifyContent: "center",
    alignItems: "center",
  },
  ProductList: {
    paddingVertical: 16,
  },
  productContent: {
    backgroundColor: "#fff",

    flexDirection: "row",
    justifyContent: "space-between",
  },

  producName: {
    justifyContent: "center",
    alignItems: "center",
    height: 42,
    fontSize: 16,

    color: "#000",
  },
});
