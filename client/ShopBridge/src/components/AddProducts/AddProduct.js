import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
} from 'react-native';
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
        console.log(data);

        if (data.status === true) {
          navigation.navigate('List All Item');
        } else if (
          data.status === false &&
          data.error == 'Record already exist'
        ) {
          alert('Record already exists please use unique product Id');
        } else if (
          data.status === false &&
          data.error._message == 'products validation failed'
        ) {
          alert('Please use number for price');
        } else if (
          data.status === false &&
          data.error == 'Unable to retrive data!!!!!'
        ) {
          alert('Please use number for product id ');
        }
      })
      .catch((error) => console.log(error));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  };

  return (
    <View data-test="addProduct" style={styles.item}>
      <Text style={styles.headFont}>Please fill below Product details</Text>
      <ActivityIndicator animating={true} />
      <View style={styles.mainInput}>
        <TextInput
          style={styles.inputBox}
          value={pid}
          onChangeText={(e) => {
            setPid(e);
          }}
          placeholder="Add product ID"
        />
        <TextInput
          style={styles.inputBox}
          type="text"
          value={pname}
          onChangeText={(e) => {
            setPname(e);
          }}
          placeholder="Add product name"
        />
        <TextInput
          style={styles.inputBox}
          value={pdescription}
          onChangeText={(e) => {
            setPdescription(e);
          }}
          editable
          maxLength={40}
          placeholder="Description"
        />

        <TextInput
          style={styles.inputBox}
          value={price}
          onChangeText={(e) => {
            setPrice(e);
          }}
          placeholder="Price"
        />
      </View>
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
const styles = StyleSheet.create({
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

  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },

  mainInput: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
