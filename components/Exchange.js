import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, { useState } from 'react';

const Exchange = ({ coins, setBalance }) => {
  const [number, onChangeNumber] = useState(0);
  const [number2, onChangeNumber2] = useState(0);

  const coinsData = coins.map((coin) => {
    const data = {
      name: coin.name,
      amount: (coin.amount && coin.amount) || 0,
      current_price: coin.current_price,
    };
    return data;
  });

  const coinsName = coins.map((coin) => coin.name);

  console.log(coinsData);

  const handleCompra = () => {
    const resultado = number * number2;
    setBalance(resultado);
  };

  return (
    <View>
      <Text>Quiero vender...</Text>
      <SelectDropdown
        data={coinsName}
        defaultButtonText="Elegir Moneda"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
      />
      <Text>Quiero comprar...</Text>
      <SelectDropdown
        data={coinsName}
        defaultButtonText="Elegir Moneda"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="useless placeholder"
      />
      <TouchableOpacity onPress={() => handleCompra()}>
        <Text>Consirmar Operación</Text>
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
