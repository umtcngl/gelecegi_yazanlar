import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Counter from './counter';

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  const handleToggleCounter = () => {
    setShowCounter((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {showCounter && <Counter />}
      <Button
        title={showCounter ? 'Counter ı Sakla' : 'Counter ı Göster'}
        onPress={handleToggleCounter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});

export default App;
