import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import CoinItem from './CoinItem';

const ListBalance = ({ coins }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={coins}
        renderItem={({ item }) => {
          return (
            <>
              <CoinItem coin={item} />
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
