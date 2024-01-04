import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [name, setName] = useState("Ümitcan");
  const [age, setAge] = useState(22);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}
      />

      {isVisible && (
        <View>
          <Text style={styles.text}>İsim : {name}</Text>
          <Text style={styles.text}>Yaş : {age}</Text>
          <Button title='İsmi Değiştir' onPress={() => setName('Ahmet')} />
          <Button title='Yaşı Değiştir' onPress={() => setAge(31)} />
        </View>
      )}
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
