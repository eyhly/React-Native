import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet } from 'react-native';

const Chara = ({ route }) => {
  const { characters } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.split(' ').map(name => name[0]).join('')}</Text>
      </View>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.va}>{item.va}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>        
      <Text style={styles.header}>Daftar Voice Actor</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(45, 133, 200, 0.2)",
    paddingTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    backgroundColor: '#ddd',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  va: {
    fontSize: 14,
    color: '#666',
  },
});

export default Chara;
