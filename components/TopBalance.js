import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';

const TopBalance = ({ setView, balance }) => {
  console.log('test');
  return (
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceText}>Total</Text>
      <Text style={styles.balanceAmount}>${balance.toFixed(2)}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => setView(0)}
        >
          <Icon name={'arrow-top-right'} style={styles.icon} />
          <Text style={styles.button}>Balance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => setView(1)}
        >
          <Icon name={'arrow-bottom-left'} style={styles.icon} />
          <Text style={styles.button}>Exchange</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBalance;

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: '#2751EC',
    height: 250,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    color: '#fff',
    fontSize: 14,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 46,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    margin: 10,
    backgroundColor: '#2048E5',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 3,
  },
});
