import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, ActivityIndicator} from 'react-native';
import apiURL from '../../config/serverConfig';

export default function AddProduct({navigation}) {
  const [pid, setPid] = useState('');
  const [pdescription, setPdescription] = useState('');
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  const [loaderActivity, setloaderActivity] = useState(false);
  const submitValue = () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        pdescription: pdescription,
        pid: pid,
        pname: pname,
        price: price,
      }),
    };
    fetch(apiURL + 'products/add-product', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // setData(data.response);
        console.log(data.status);

        navigation.navigate('List All Item');
      })
      .catch((error) => console.log(error));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <View data-test="addProduct">
      <Text>Please fill below Product details</Text>
      <ActivityIndicator animating={true} />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={pid}
        onChangeText={(e) => {
          setPid(e);
        }}
        placeholder="Add product ID"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        type="text"
        value={pname}
        onChangeText={(e) => {
          setPname(e);
        }}
        placeholder="Add product name"
      />
      <TextInput
        style={{height: 80, borderColor: 'gray', borderWidth: 1}}
        value={pdescription}
        onChangeText={(e) => {
          setPdescription(e);
        }}
        editable
        maxLength={40}
        placeholder="Description"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        value={price}
        onChangeText={(e) => {
          setPrice(e);
        }}
        placeholder="Price"
      />
      <Button
        data-test="buttonRender"
        title="Submit"
        onPress={() => {
          submitValue();
        }}
      />
    </View>
  );
}
