import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

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
    <View>
      <Text>Hola mundo</Text>

      <FlatList
        data={coins}
        renderItem={({ item }) => {
          console.log(item.id);

          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default App;
