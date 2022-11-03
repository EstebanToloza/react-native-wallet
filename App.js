import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import TopBalance from './components/TopBalance';
import ListBalance from './components/ListBalance';
import Exchange from './components/Exchange';
import { initialAmountUsd } from './data/dummyData.json';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [view, setView] = useState(0);
  const [balance, setBalance] = useState(initialAmountUsd);

  const getData = async () => {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cusd-coin&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    );
    const data = await res.json();
    setCoins(data);
    //console.log(coins);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopBalance setView={setView} balance={balance} />
      {view === 0 ? <ListBalance coins={coins} /> : <Exchange />}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
