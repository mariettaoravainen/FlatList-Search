import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import Data from './Data';
import Search from './Search';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Data);
  }, []);

  const executeSearch = (search) => {
    const searchArray = Data.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
        <Row person={item} />
    )}
    ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});