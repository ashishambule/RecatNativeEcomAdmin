import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import apiURL from '../../config/serverConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
const Item = ({pname, OnPressed, price, deletItem}) => {
  return (
    <TouchableOpacity onPress={OnPressed}>
      <View style={styles.item}>
        <Text style={styles.title}>{pname}</Text>
        <View style={styles.buttonItem}>
          <Text style={styles.price}>{price}</Text>
          <Icon style={styles.delIcon} name="trash" onPress={deletItem} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ListP({navigation}) {
  const [DATA, setDATA] = useState(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch(apiURL + 'products/get-product')
      .then((response) => response.json())
      .then((data) => {
        var res = data.response;
        setDATA(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const callDeleteApi = (pid) => {
    const requestOptions = {
      method: 'DELETE',
    };

    fetch(apiURL + `products/delete-productbyid/${pid}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log('Prduct deleted', data.status);
        setDeleted(data.status);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [selectedId, setSelectedItemId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <Item
        pname={item.pname}
        price={item.price}
        OnPressed={() => {
          console.log('====================================');
          console.log(item.pid);
          console.log('====================================');
          if (item.pid) {
            navigation.navigate('Product Details', item.pid);
          }
        }}
        deletItem={() => {
          alert('Product has been deleted');
          callDeleteApi(item.pid);
        }}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data-test="listofitems"
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
      />
    </SafeAreaView>
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
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 20,
  },
  delIcon: {
    fontSize: 25,
    color: 'black',
    marginLeft: 320,
    position: 'absolute',
  },
  buttonItem: {
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'wrap',
  },
});
