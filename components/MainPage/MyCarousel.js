import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = ({ hobby, randomNumber }) => {
  const [entries, setEntries] = useState([
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[0],
    },
    {
      title: '집에서 특별한 취미 어때요?',
      illustration: hobby[randomNumber].image[1],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[2],
    },
    {
      title: '집에서 특별한 취미 어때요?',
      illustration: hobby[randomNumber].image[3],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[4],
    },
    {
      title: '이런 취미는 어때요?',
      illustration: hobby[randomNumber].image[5],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[6],
    },
    {
      title: '이런 취미는 어때요?',
      illustration: hobby[randomNumber].image[7],
    },
    {
      title: hobby[randomNumber].name,
      illustration: hobby[randomNumber].image[8],
    },
    {
      title: `추천이 마음에 드신다면 ${'\n'}상단 아이콘을 눌러 구매해보세요`,
      illustration: hobby[randomNumber].image[9],
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
        title: '집에서 특별한 취미 어때요?',
        illustration: hobby[randomNumber].image[1],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[2],
      },
      {
        title: '집에서 특별한 취미 어때요?',
        illustration: hobby[randomNumber].image[3],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[4],
      },
      {
        title: '이런 취미는 어때요?',
        illustration: hobby[randomNumber].image[5],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[6],
      },
      {
        title: '이런 취미는 어때요?',
        illustration: hobby[randomNumber].image[7],
      },
      {
        title: hobby[randomNumber].name,
        illustration: hobby[randomNumber].image[8],
      },
      {
        title: `추천이 마음에 드신다면 ${'\n'}상단 아이콘을 눌러 구매해보세요`,
        illustration: hobby[randomNumber].image[9],
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
    marginTop: 20,
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
  title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
  },
});
