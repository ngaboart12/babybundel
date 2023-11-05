import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../firebaseConfig';
import {getFirestore, collection, query, where, getDocs} from 'firebase/firestore'
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import Product from '../component/Product';



const ProductCategory = ({route,navigation}) => {
    const {cate} = route.params
    const [products, setProducts] = useState([]);
    const numColumns2=2;
    
    useEffect(()=>{
        const fetchProducts = async () => {
            const categoryToQuery = cate; // Change this to your desired category
        try {

        const q = query(collection(db, 'products'), where('category', '==', categoryToQuery));
        const querySnapshot = await getDocs(q);

        const productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      
      
    };

    fetchProducts();
    },[])
   
  
  // Query products with the specified category
  
  return (
    <View style={styles.constain}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.iconStyle}>
              <Icon name="arrow-left" size={28} color={"black"} />
            </Text>
        </TouchableOpacity>
        <Text style={{fontSize:20,fontFamily:'Outfit'}}>Category {cate}</Text>
        <Text></Text>
      </View>
      <View style={styles.productList}>
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
  )
}
const styles = StyleSheet.create({
    constain:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:20,
    },
    header:{
        display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'


    },
    productList:{
        paddingTop:10
    }

})

export default ProductCategory