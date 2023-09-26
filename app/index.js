import { Pressable, View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import cities from '../data/cities';
import { Link } from 'expo-router';
import Animated, { useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';


const CityItem = ({ item }) => (
  <Link href={`/${item.id}`} asChild>
    <Pressable style={styles.item}>
      <Animated.Image sharedTransitionTag={`image-${item.id}`} source={{ uri: item.image }} style={styles.image} />
      <Animated.Text sharedTransitionTag={`title-${item.id}`} style={styles.cityName}>{item.name}</Animated.Text>
    </Pressable>
  </Link>
)


const CityItemSkeleton = () => {
  const opacity = useSharedValue(1)
  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
          withDelay(1000, withTiming(0.5, {duration: 1000})),
          withTiming(1, {duration: 1000})
        ),
        -1, false
        );
  }, [])
  return(
      <Animated.View style={[styles.item, {opacity}]}>
        <View style={styles.image} />
        <Animated.View style={{height: 20, width: '50%', backgroundColor: 'gainsboro', opacity}} />
      </Animated.View>
  )
}



const CityGrid = () => {
  useEffect(() => {
    setLoading(true)
    const saa = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(saa);
  }, [])
  const [ loading, setLoading ] = useState(true) 

  if (loading){
    return (
      <SafeAreaView>
        <FlatList
            data={Array(10)}
            renderItem={() => <CityItemSkeleton />}
            numColumns={2}      
        />
    </SafeAreaView>
    )
  }


  return (
    <SafeAreaView >
      <FlatList
        data={cities}
        numColumns={2}
        renderItem={({ item })=> <CityItem item={item} />}
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
    backgroundColor: 'gainsboro'
  },
  cityName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CityGrid;
