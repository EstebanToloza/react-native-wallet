import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CoinItem = ({ coin, currentAmount }) => {
  //const currentAmount = 0;
  const newCoin = { ...coin, amount: currentAmount };
  const { image, name, symbol, current_price, amount } = newCoin;

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
        <Text style={styles.currentAmount}>${amount}</Text>
        <Text style={[styles.marketValue]}>${current_price.toFixed(2)}</Text>
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
  currentAmount: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  marketValue: {
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
