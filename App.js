import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {

  const [ myInput, setMyInput ] = useState('');

  const myData = {
    messages: [
      { text: "Hey, sup?" },
      { text: "Not much. Salty over the sb" }
    ]
  };





  return (
    <View style={styles.container}>
      <Text>New Message:</Text>
      <TextInput />
      <Button />

      <Text>My messages:</Text>
      <FlatList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
