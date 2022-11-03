import { Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import TopBalance from './components/TopBalance';
import ListBalance from './components/ListBalance';

const App = () => {
  const [coins, setCoins] = useState([]);

  const getData = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const viewsList = ['Vista 1', 'Vista 2'];
  const [view, setView] = useState(0);

  return (
    <>
      <TopBalance setView={setView} />
      {view === 0 ? <ListBalance coins={coins} /> : <Text>Vista 2</Text>}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
