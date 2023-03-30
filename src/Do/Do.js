import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './DoStyle';
import Icon from 'react-native-vector-icons/FontAwesome';


const DoList = () => {
  const [doList, setDoList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        const parsedItems = items.map(item => {
          const data = JSON.parse(item[1]); // JSON dizesini nesneye dönüştürün
          return {
            key: item[0],
            duty: data.duty,
            when: data.when,
          };
        });

        setDoList(parsedItems);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
      setDoList(prevList => prevList.filter(item => item.key !== key));
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.general}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.duty}</Text>
        <Text style={styles.itemText}>{item.when}</Text>
        <Text style={styles.itemText}>
          Create Date:{' '}
          {new Date(parseInt(item.key)).toLocaleString('tr-TR', {
            timeZone: 'Europe/Istanbul',
          })}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.delbut}
        onPress={() => removeItem(item.key)}>
          <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={doList} renderItem={renderItem} />
    </View>
  );
};
export default DoList;
