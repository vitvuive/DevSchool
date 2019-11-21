import React, { Component, } from 'react';
import { ScrollView, View, Image, StyleSheet, } from 'react-native';
import { StyleText, StyledCardItem, } from 'src/shared-components';
import { IconAssets, } from 'src/assets';
import { Colors, Metrics, } from 'src/theme';
export default class ProfileScreen extends Component {
  render() {
    const { name, email, urlAvatar, onPress, } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.banner}>
            <View style={styles.info}>
              <Image source={{ uri: urlAvatar, }} style={styles.imageStyle} />
              <StyleText white bold size={25}>
                {'Hi ' + name}
              </StyleText>
            </View>
            <StyleText white>{email}</StyleText>
          </View>
          <View style={styles.containerSection}>
            <StyledCardItem
              title={'Send us some app feedback'}
              icon={IconAssets.Feedback}
              borderBottomWidth={0.5}
            />
            <StyledCardItem
              title={'Terms and conditions'}
              icon={IconAssets.Condition}
              borderBottomWidth={0.5}
            />
            <StyledCardItem
              title={'Privacy Policy'}
              icon={IconAssets.Privacy}
              borderBottomWidth={0.5}
            />
            <StyledCardItem
              title={'About us'}
              icon={IconAssets.Info}
              borderBottomWidth={0.5}
            />
            <StyledCardItem
              title={'Log Out'}
              tintColor={Colors.primary}
              size={16}
              icon={IconAssets.Logout}
              textColor={Colors.primary}
              onPress={onPress}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: Metrics.getBaseUnitFactor(2),
  },
  banner: {
    height: 200,
    borderRadius: 8,

    elevation: 4,
    shadowOffset: { width: 1, height: 13, },
    shadowColor: 'rgba(0,0,1,0.1)',
    shadowOpacity: 0.8,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  containerSection: {
    elevation: 4,
    shadowOffset: { width: 1, height: 13, },
    shadowOpacity: 0.8,
    borderRadius: 8,
    marginVertical: Metrics.getBaseUnitFactor(3),

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  info: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,

    resizeMode: 'contain',
  },
});
