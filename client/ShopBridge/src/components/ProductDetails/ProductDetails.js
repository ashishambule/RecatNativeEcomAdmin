import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  View,
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
    <SafeAreaView style={styles.container} data-test="details">
      <Text>Product details</Text>
      {singleProduct == null ? (
        <Text>Loding....</Text>
      ) : (
        <View>
          <Text>Product Id: {singleProduct.pid}</Text>
          <Text>Product Name: {singleProduct.pname}</Text>
          <Text>Product Description: {singleProduct.pdescription}</Text>
          <Text>Product Price: {singleProduct.price}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
