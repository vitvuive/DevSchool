import React, { Component, } from 'react';
import { TouchableOpacity, View, Image, } from 'react-native';

import { ImageAssets, IconAssets, } from 'src/assets';
import { Metrics, Colors, } from 'src/theme';
import { StyleText, } from 'src/shared-components';

export default class PromotionItem extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            height: 300,
            marginVertical: Metrics.getBaseUnitFactor(),
            borderRadius: 10,
            shadowOffset: { height: 3, width: 13, },
            elevation: 8,
            shadowColor: 'black',
            backgroundColor: '#fff',
          }}
        >
          <Image
            source={ImageAssets.Card3}
            style={{
              height: 200,
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <View style={{ paddingHorizontal: Metrics.getBaseUnitFactor(3), }}>
            <View
              style={{
                backgroundColor: '#fff',
                height: 60,
                borderTopColor: Colors.inActiveBtmTabColor,
                borderBottomWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyleText size={20}>
                {'10 giải đặc biệt, Du lịch Phú Quốc '}
              </StyleText>
              <StyleText>
                {'Đến Highland Coffee ngay! để có cơ hội trúng thưởng '}
              </StyleText>
            </View>
            <View
              style={{
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#fff',
              }}
            >
              <Image
                source={IconAssets.Like}
                style={{ height: 25, width: 25, }}
              />
              <Image
                source={IconAssets.Heart}
                style={{ height: 25, width: 25, }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
