/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          img: this.props.hobby[this.props.randomNumber].image[0],
          text: this.props.hobby[this.props.randomNumber].name,
        },
        {
          img: this.props.hobby[this.props.randomNumber].image[1],
          text: this.props.hobby[this.props.randomNumber].name,
        },
        {
          img: this.props.hobby[this.props.randomNumber].image[2],
          text: this.props.hobby[this.props.randomNumber].name,
        },
        {
          img: this.props.hobby[this.props.randomNumber].image[3],
          text: this.props.hobby[this.props.randomNumber].name,
        },
        {
          img: this.props.hobby[this.props.randomNumber].image[4],
          text: this.props.hobby[this.props.randomNumber].name,
        },
      ],
    };
  }

  _renderItem({ item }) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 150,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Image
          source={{
            uri: item.img,
          }}
          style={{ width: 170, height: 130, borderRadius: 5 }}
        />
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{
          height: 329,
          backgroundColor: '#f0f0f0',
          marginTop: 40,
          paddingTop: 30,
        }}>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Carousel
            layout={'default'}
            ref={(ref) => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={350}
            itemWidth={200}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
        </View>
      </SafeAreaView>
    );
  }
}
