import React from 'react';
import {
  Button,
  StyleSheet,
  StatusBar,
  Text,
  SafeAreaView,
  Image,
  View,
} from 'react-native';
import Applogo from '../../Assets/logo.png';
import AddProduct from '../AddProducts/AddProduct';
import ListP from '../ListProducts/ListP';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Separator = () => <View style={styles.separator} />;
// const {navigate} = this.props.navigation;
export default function HomeC({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.appLogo} source={Applogo} data-test="homelogo" />

      <Text style={styles.maintitle}>Welcome to ShopBridge Admin Portal</Text>
      <Text style={styles.subtitle}>
        This application supports the admin to Add, Update and delete the
        product.
      </Text>

      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}

      <Button
        style={styles.addButton}
        onPress={() => navigation.navigate('Add New Item')}
        // onPress={() => navigate('AddItemPage')}
        color="#007AFF"
        title="Add New Product"
      />
      <Separator />

      <Button
        title="List All Products"
        onPress={() => navigation.navigate('List All Item')}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 2,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  maintitle: {
    fontSize: 30,
    color: 'green',
    padding: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  appLogo: {
    width: 300,
    height: 400,
    alignSelf: 'center',
  },
  addButton: {
    width: 50,
    margin: 10,
    color: 'red',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
