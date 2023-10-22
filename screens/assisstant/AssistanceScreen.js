import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const AssistanceScreen = ({ navigation }) => {
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
            <Text style={styles.title}>Shop Assistant</Text>
          </View>
        </View>

        <View style={styles.titleContent}>
          <Text style={styles.titleContentHeader}>Select Age</Text>
          <Text style={styles.titleContentText}>
            Lorem ipsum dolor sit amet consectetur. Sit vulputate nunc faucibus
            elit sed tempor. Ultrices porttitor odio dolor duis
          </Text>
        </View>
        <View style={styles.categoryList}>
          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.categoryContent}>
              <Text style={styles.AgeCategory}>0-5</Text>
              <Text style={styles.TextContent}>Months</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.categoryContent}>
              <Text style={styles.AgeCategory}>5-12</Text>
              <Text style={styles.TextContent}>Months</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.categoryContent}>
              <Text style={styles.AgeCategory}>1-2</Text>
              <Text style={styles.TextContent}>years</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("asscategory")}>
            <View style={styles.categoryContent}>
              <Text style={styles.AgeCategory}>2+</Text>
              <Text style={styles.TextContent}>years</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AssistanceScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffb648",
    // alignItems: 'center',

    width: "100%",
    height: "100%",
    color: "white",
  },
  header: {
    paddingVertical: 31,
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
  categoryContent: {
    marginTop: 16,
    marginHorizontal: 24,
    backgroundColor: "#ffc979",
    alignItems: "center",
  },
  categoryList: {
    marginTop: 34,
  },
  AgeCategory: {
    paddingHorizontal: 126,
    paddingTop: 16,
    fontSize: 20,

    color: "#fff",
    alignItems: "center",
  },
  TextContent: {
    paddingHorizontal: 126,
    paddingBottom: 16,
    fontSize: 20,
 
    color: "#fff",
    alignItems: "center",
  },
});
