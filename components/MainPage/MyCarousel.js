import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = ({ hobby, randomNumber }) => {
  const [entries, setEntries] = useState([
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[0],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[1],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[2],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[3],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[4],
    },
  ]);

  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries([
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[0],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[1],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[2],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[3],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[4],
      },
    ]);
  }, [randomNumber, hobby]);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        autoplay
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
