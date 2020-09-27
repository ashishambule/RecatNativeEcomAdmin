import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function EditProduct() {
  const [value, onChangeText] = React.useState('Name of product');
  return (
    <View>
      <Text>Add Product</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        // onChangeText={(text) => onChangeText(text)}
        placeholder="Add product name"
      />
      <TextInput
        style={{height: 80, borderColor: 'gray', borderWidth: 1}}
        // onChangeText={(text) => onChangeText(text)}

        editable
        maxLength={40}
        placeholder="Description"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        // onChangeText={(text) => onChangeText(text)}
        placeholder="Price"
      />
      <Button title="Update" />
    </View>
  );
}
