import React from 'react';
import { View, Text, FlatList } from 'react-native';

const data = {
  'battery': {'antall': 1, 'vekt': 'N/A', 'kategori': 'tørrvare'},
  'pant': {'antall': 1, 'vekt': 'N/A', 'kategori': 'tørrvare'},
  'xtra grillpølse': {'antall': 1, 'vekt': '1kg', 'kategori': 'fryser'},
  'xtra kneippbrød': {'antall': 1, 'vekt': 'N/A', 'kategori': 'kjøleskap'},
  'xtra pizzatopping': {'antall': 1, 'vekt': 'N/A', 'kategori': 'tørrvare'}
};

const ListItem = ({ itemName, itemData }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
    <View>
      <Text style={{ fontSize: 18 }}>{itemName}</Text>
      <Text>Antall: {itemData.antall}</Text>
      <Text>Vekt: {itemData.vekt}</Text>
      <Text>Kategori: {itemData.kategori}</Text>
    </View>
  </View>
);

const App = () => {
  return (
    <View>
      <FlatList
        data={Object.keys(data)}
        renderItem={({ item }) => (
          <ListItem itemName={item} itemData={data[item]} />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default App;
