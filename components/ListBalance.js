import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import CoinItem from './CoinItem';
import {
  initialAmountCrypto,
  initialAmountUsd,
} from './../data/dummyData.json';

const ListBalance = ({ coins }) => {
  const defaultCoin = {
    image:
      'https://img.freepik.com/premium-vector/dollar-sign-flat-icon-vector-illustration_686498-432.jpg?w=360',
    name: 'USD',
    symbol: 'USD',
    current_price: 1,
    initialAmountUsd,
  };

  return (
    <View style={styles.list}>
      <CoinItem coin={defaultCoin} currentAmount={initialAmountUsd} />
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return (
            <>
              <CoinItem coin={item} currentAmount={initialAmountCrypto} />
            </>
          );
        }}
      />
    </View>
  );
};

export default ListBalance;

const styles = StyleSheet.create({
  list: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
