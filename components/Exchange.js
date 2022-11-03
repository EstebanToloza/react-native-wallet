import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const Exchange = () => {
  const [number, onChangeNumber] = useState(0);
  const [number2, onChangeNumber2] = useState(0);

  console.log(number);
  console.log(number2);

  const handleCompra = () => {
    const resultado = number * number2;
    return console.log(resultado);
  };

  return (
    <View>
      <Text>Quiero vender</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />
      <Text>Quiero comprar</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="useless placeholder"
      />
      <TouchableOpacity onPress={() => handleCompra()}>
        <Text>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
