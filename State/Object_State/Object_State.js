import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [user, setUser] = useState({id:1,name:"Ümitcan"});
  const handlePress=() => {
    setUser((prev) => ({...prev, name:"Ahmet"}))
  };


  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>ID : {user.id}</Text>
          <Text style={styles.text}>İsim : {user.name}</Text>
          <Button title=' Değiştir' onPress={handlePress} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:'center'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default App;
