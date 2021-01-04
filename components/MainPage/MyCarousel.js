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
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
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
            uri:
              'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjNfNDMg%2FMDAxNjA2MTA3NjgwNTY3.0dmh36Ntn8CxUOukg-ydWw6QBl6ElAkYGuBlCQFkSj8g.u2jVHORHxO-AeuXTL66M6AP85bF2OaWhPuGpR8rGFbkg.JPEG.fhzkxms%2FKakaoTalk_20201123_140002812.jpg&type=sc960_832',
          }}
          style={{ width: 170, height: 130, borderRadius: 5,}}
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
