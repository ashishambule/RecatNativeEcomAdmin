import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import apiURL from '../../config/serverConfig';

export default function ProductDetails(props) {
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    fetch(apiURL + `products/get-productbyid/${props.route.params}`)
      .then((response) => response.json())
      .then((data) => {
        var res = data.response;
        console.log('Useeffecctctctct', res);
        setSingleProduct(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.item} data-test="details">
      <Text style={styles.headFont}>Product details</Text>
      {singleProduct == null ? (
        <Text>Loding....</Text>
      ) : (
        <View>
          <Text style={styles.itemFont}>Product Id: {singleProduct.pid}</Text>
          <Text style={styles.itemFont}>
            Product Name: {singleProduct.pname}
          </Text>
          <Text style={styles.itemFont}>
            Product Description: {singleProduct.pdescription}
          </Text>
          <Text style={styles.itemFont}>
            Product Price: {singleProduct.price}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  headFont: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    fontSize: 20,
  },
  itemFont: {
    fontSize: 15,
  },
});
