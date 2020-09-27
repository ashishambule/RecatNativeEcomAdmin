import React, {Component} from 'react';
import AddProduct from '../components/AddProducts/AddProduct';
import HomeC from '../components/HomeComponent/HomeC';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListP from '../components/ListProducts/ListP';
import ProductDetails from '../components/ProductDetails/ProductDetails';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeC} />
        <Stack.Screen name="Add New Item" component={AddProduct} />
        <Stack.Screen name="List All Item" component={ListP} />
        <Stack.Screen name="Product Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
