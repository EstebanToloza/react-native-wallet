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
  const [disponible, setDisponible] = useState(null);
  const [symbol, setSymbol] = useState(false);

  const coinsData = coins.map((coin) => {
    const data = {
      name: coin.name,
      amount: (coin.amount && coin.amount) || 0,
      current_price: coin.current_price,
      symbol: coin.symbol,
    };
    return data;
  });

  const coinsName = coins.map((coin) => coin.name);

  console.log(coinsData);

  const handleSelect = (selectedItem, index) => {
    const currentAmount = coinsData[index].amount;
    const currentSymbol = coinsData[index].symbol;
    setDisponible(currentAmount);
    setSymbol(currentSymbol);
  };

  const handleCompra = () => {
    const resultado = number * number2;
    setBalance(resultado);
  };

  return (
    <View style={styles.container}>
      <Text>Quiero vender...</Text>
      <View style={styles.inpustContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ingrese monto"
        />
        <SelectDropdown
          buttonStyle={styles.select}
          data={coinsName}
          defaultButtonText="Elegir Moneda"
          onSelect={(selectedItem, index) => {
            handleSelect(selectedItem, index);
          }}
        />
      </View>
      {disponible === null && (
        <Text style={styles.disponible}>
          Seleccione una opción para ver saldo disponible.
        </Text>
      )}
      {disponible === 0 && (
        <Text style={styles.disponible}>Sin saldo disponible</Text>
      )}
      {!!disponible && (
        <Text style={styles.disponible}>
          Disponible: {symbol} {disponible}
        </Text>
      )}

      <Text>Quiero comprar...</Text>
      <View style={styles.inpustContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Ingrese monto"
        />
        <SelectDropdown
          buttonStyle={styles.select}
          data={coinsName}
          defaultButtonText="Elegir Moneda"
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.confimButtonContainer}
        onPress={() => handleCompra()}
      >
        <Text style={styles.confirmButton}>Confirmar Operación</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 50,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: '45%',
  },
  select: {
    width: '45%',
    margin: 10,
  },
  inpustContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    textAlign: 'center',
    backgroundColor: '#2751EC',
    width: 200,
    paddingVertical: 15,
    borderRadius: 25,
    color: '#fff',
    fontSize: 18,
  },
  confimButtonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  disponible: {
    marginBottom: 30,
  },
});
