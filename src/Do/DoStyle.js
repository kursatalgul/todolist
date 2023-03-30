import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    padding: 8,
  },
  card: {
    backgroundColor: 'white',
    opacity: 0.7,
    borderRadius: 8,
    margin: 4,
    padding: 16,
  },
  cardContent: {
    alignItems: 'center',
  },
  dutyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  whenText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  itemText: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  delbut: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 0,
  },

  general: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
