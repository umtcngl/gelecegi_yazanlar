import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView, FlatList } from 'react-native';

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ümitcan"
    },
    {
      id: 2,
      name: "Ali"
    }
  ]);

  const handlePress = () => {
    setUsers((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 1000),
        name: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()} // Ensure key is a string
        renderItem={({ item }) => (<View style={styles.item}><Text style={styles.text}>{item.name}</Text></View>)}
      />
      <Button title="Add User" onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flex: 1,
    padding:1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  item:{
    backgroundColor:'#eee',
    borderBottomWidth:1,
    padding:10,
  }
});

export default App;
