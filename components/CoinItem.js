import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CoinItem = ({ coin }) => {
  const currentValue = 0;
  const { image, name, symbol, current_price } = coin;

  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.containerNames}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.textSymbol}>{symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>${current_price}</Text>
        <Text style={[styles.pricePercentage]}>{currentValue}</Text>
      </View>
    </View>
  );
};

export default CoinItem;

const styles = StyleSheet.create({
  containerItem: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerNames: {
    marginLeft: 20,
  },
  coinName: {
    flexDirection: 'row',
  },
  text: {
    color: '#000',
  },
  textPrice: {
    color: '#000',
    fontWeight: 'bold',
  },
  pricePercentage: {
    textAlign: 'right',
  },
  priceUp: {
    color: '#00B589',
  },
  priceDown: {
    color: '#fc4422',
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: '#434343',
    textTransform: 'uppercase',
  },
});
