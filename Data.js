import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function Data({ items }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Row person={item} />}
        keyExtractor={(item) => item.id.toString()} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
