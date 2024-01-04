import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setInterval");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("count ya da amount state i Değişti.");
  }, [count, amount]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + amount)} />

      <Text style={styles.text}>Amount: {amount}</Text>
      <Button title="Miktarı 1 Yap" onPress={() => setAmount(1)} />
      <Button title="Miktarı 5 Yap" onPress={() => setAmount(5)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Counter;
