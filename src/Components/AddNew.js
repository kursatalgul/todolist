import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './AddNewStyle';

const AddNew = ({setDoList}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    duty: '',
    when: '',
  });

  const handlChange = (key, value) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    try {
      if (inputValues.duty && inputValues.when) {
        const key = `${Date.now()}`;
        const value = JSON.stringify(inputValues);
        await AsyncStorage.setItem(key, value);
        setDoList(prevList => [
          ...prevList,
          {
            key,
            duty: inputValues.duty,
            when: inputValues.when,
          },
        ]);
        setInputValues({duty: '', when: ''});
        setModalVisible(false);
      } else {
        Alert.alert('Please fill in all fields.');
      }
    } catch (error) {
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.screen}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.body}>
            <View style={styles.inputarea}>
              <TextInput
                style={styles.textInput}
                placeholder="What I Do ?"
                onChangeText={value => handlChange('duty', value)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="When Should I Do"
                onChangeText={value => handlChange('when', value)}
              />
            </View>
            <View style={styles.buttonarea}>
              <TouchableOpacity
                style={styles.addList}
                onPress={() => {
                  handleSave();
                }}>
                <Text style={styles.closeText}>Add List</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeModel}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddNew;
