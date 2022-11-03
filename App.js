import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinItem from './components/CoinItem';
import Balance from './components/Balance';
import { TabView, Tab } from 'react-native-tab-view-easy';
import CustomTabBar from './components/CustomTabBar';

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

  return (
    <>
      <Balance />
      {/* <CustomTabBar /> */}
      <TabView style={styles.container} indicatorStyle={{ color: 'red' }}>
        <Tab title={'Tab 1'} backgroundColor={'red'}>
          <FlatList
            style={styles.list}
            data={coins}
            renderItem={({ item }) => {
              //console.log(item);
              return <CoinItem coin={item} />;
            }}
          />
        </Tab>
        <Tab title={'Tab 2'}>
          <Text>Content</Text>
        </Tab>
      </TabView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#F7F8FA',
    //alignItems: 'center',
    //flex: 1,
    //width: '100%',
  },
  list: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
