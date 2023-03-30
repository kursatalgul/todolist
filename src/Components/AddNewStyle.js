import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 20,
  },
  roundButton1: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 35,

    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  closeModel: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    width: 40,
    height: 30,
  },
  body: {
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    backgroundColor: 'black',
    opacity: 0.8,
    borderWidth: 1,
    borderColor: 'white',
  },
  inputarea: {
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    flexDirection: 'column',
    flex: 0.7,
    padding: 20,
    margin: 30,
  },
  buttonarea: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  closeText: {
    paddingTop: 3,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    
  },
  addList: {
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 1,
    width: 70,
    height: 30,
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'justify',
    justifyContent: 'center',
  },
  keybord: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
