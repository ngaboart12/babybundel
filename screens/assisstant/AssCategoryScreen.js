import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const AsscategoryScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.page}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.iconStyle}>
              <Icon name="arrow-left" size={28} color={"white"} />
            </Text>
          </TouchableOpacity>
          <View style={styles.titleHeader}>
            <TouchableOpacity onPress={() => navigation.navigate("about")}>
              <Text style={styles.title}>Shop Assistant</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.titleContent}>
          <Text style={styles.titleContentHeader}>Select Age</Text>
          <Text style={styles.titleContentText}>
            {" "}
            Lorem ipsum dolor sit amet consectetur. Sit vulputate nunc faucibus
            elit sed tempor. Ultrices porttitor odio dolor duis
          </Text>
        </View>
        <View style={styles.categoryList}>
          {/* category list */}

          <View style={styles.collectionBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("assproducts")}
            >
              <View style={styles.collectionTitle}>
                <Text style={styles.collectionName}>ROMAN </Text>
                <Text style={styles.collectionName}> COLLECTION</Text>
              </View>

              <View style={styles.collectionList}>
                <Text style={styles.collectionContent}>
                  2Shorts, 2Shorts, 2Shorts ...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* </View> */}

          <View style={styles.collectionBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("assproducts")}
            >
              <View style={styles.collectionTitle}>
                <Text style={styles.collectionName}>ROMAN </Text>
                <Text style={styles.collectionName}> COLLECTION</Text>
              </View>
              <View style={styles.collectionList}>
                <Text style={styles.collectionContent}>
                  2Shorts, 2Shorts, 2Shorts ...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.collectionBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("assproducts")}
            >
              <View style={styles.collectionTitle}>
                <Text style={styles.collectionName}>ROMAN </Text>
                <Text style={styles.collectionName}> COLLECTION</Text>
              </View>

              <View style={styles.collectionList}>
                <Text style={styles.collectionContent}>
                  2Shorts, 2Shorts, 2Shorts, ...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.collectionBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("assproducts")}
            >
              <View style={styles.collectionTitle}>
                <Text style={styles.collectionName}>ROMAN </Text>
                <Text style={styles.collectionName}> COLLECTION</Text>
              </View>
              <View style={styles.collectionList}>
                <Text style={styles.collectionContent}>
                  2Shorts, 2Shorts, 2Shorts, 2Shorts,
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default AsscategoryScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffb648",
    width: "100%",
    height: "100%",
    color: "white",
  },
  header: {
    paddingVertical: 31,
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
    color: "#fff",
  },
  title: {
    color: "#fff",

    fontSize: 18,
  
  },
  titleContent: {
    alignItems: "center",
    marginTop: 25,
  },
  titleContentHeader: {
    color: "#fff",
    fontSize: 20,
  
  },
  titleContentText: {
    color: "#E8E8E8",
    fontSize: 14,
    paddingTop: 20,
    paddingHorizontal: 55,
  },
  categoryList: {
    marginTop: 34,
    marginHorizontal: 24,
    marginBottom: 16,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  collectionBox: {
    marginTop: 4,
    backgroundColor: "#ffc979",
    alignItems: "center",
    width: "46%",
    margin: 6,
  },

  collectionTitle: {
    alignItems: "center",
    paddingHorizontal: 1,
    paddingTop: 44,
    paddingBottom: 8,
  },
  collectionName: {
    paddingBottom: 2,
    fontSize: 17,
    color: "#fff",
  },
  collectionList: {
    alignItems: "center",
    paddingHorizontal: 11,
    paddingBottom: 44,
  },
  collectionContent: {
    fontSize: 16,
    color: "#fff",
  },
});
