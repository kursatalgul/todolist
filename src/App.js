import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import AddNew from './Components/AddNew';
import DoList from './Do/Do';

const Todolist = () => {
  const [list, setList] = useState([]);

  const addToList = newItem => {
    setList([...list, newItem]);
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.textHeader}> What I Do?</Text>
      </View>
      <DoList list={list} />
      <AddNew addToList={addToList} />
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    paddingTop: 10,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  background: {
    flex: 1,
    backgroundColor: 'black',
  },

});
export default Todolist;
