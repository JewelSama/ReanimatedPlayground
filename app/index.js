import { Pressable, Text, FlatList, Image, StyleSheet } from 'react-native';
import cities from '../data/cities';
import { Link } from 'expo-router';


const CityGrid = () => {
  const renderItem = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.cityName}>{item.name}</Text>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={cities}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  cityName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CityGrid;
