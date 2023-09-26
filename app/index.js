import { Pressable, Text, FlatList, Image, StyleSheet } from 'react-native';
import cities from '../data/cities';
import { Link } from 'expo-router';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';


const CityGrid = () => {
  const renderItem = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
      <Pressable style={styles.item}>
        <Animated.Image sharedTransitionTag={`image-${item.id}`} source={{ uri: item.image }} style={styles.image} />
        <Animated.Text sharedTransitionTag={`title-${item.id}`} style={styles.cityName}>{item.name}</Animated.Text>
      </Pressable>
    </Link>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={cities}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
