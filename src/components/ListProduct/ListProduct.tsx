import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import product from '../../models/Product';
import {
  buttonTextTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../Typography/typo_skin';
import {IconStar} from '../../assets/icons';
import styles from './styles';

interface ListProductProps {
  listProduct: Array<product>;
  horizontal: boolean;
}
const ListProduct: React.FC<ListProductProps> = ({listProduct, horizontal}) => {
  return (
    <FlatList
      horizontal={horizontal}
      scrollEnabled={true}
      data={listProduct}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) =>
        horizontal == true ? (
          <View
            style={{
              marginLeft: 16,
              marginRight: item.index == listProduct.length - 1 ? 16 : 8,
              marginTop: 24,
              width: 163,
            }}>
            <Image
              source={item.image}
              style={{height: 122, width: '100%', borderRadius: 8}}
            />
            <Text
              style={[
                titleTypographyMobile.title5,
                {color: 'rgba(255, 255, 255, 1)', marginTop: 4},
              ]}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
              }}>
              <Image
                source={item.avatar}
                style={[styles.avatar, {width: 20, height: 20}]}
              />
              <Text
                style={[
                  styles.fullname,
                  {
                    color: 'rgba(255, 255, 255, 0.8)',
                  },
                  subtitleTypography.subtitle3,
                ]}>
                {item.fullname}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
              }}>
              <IconStar />
              <Text
                style={[
                  styles.fullname,
                  {
                    color: 'rgba(255, 255, 255, 0.8)',
                  },
                  buttonTextTypography.buttonText5,
                ]}>
                {item.rate}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 12}}>
              <Text
                style={[
                  titleTypographyMobile.title5,
                  {
                    marginRight: 4,
                    color: 'rgba(255, 255, 255, 1)',
                  },
                ]}>
                {item.priceSale?.toFixed(3)}đ
              </Text>
              <Text
                style={[
                  titleTypographyMobile.title5,
                  {
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecorationLine: 'line-through',
                  },
                ]}>
                {item.priceOrigin.toFixed(3)}đ
              </Text>
            </View>
          </View>
        ) : (
          <View style={{marginTop: 24, width: '100%'}}>
            <Image
              source={item.image}
              style={{height: 192, width: '100%', borderRadius: 8}}
            />
            <Text
              style={[
                titleTypographyMobile.title5,
                {color: 'rgba(0, 32, 77, 1)', marginTop: 4},
              ]}
              numberOfLines={2}
              ellipsizeMode="tail">
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
              }}>
              <Image
                source={item.avatar}
                style={[styles.avatar, {width: 20, height: 20}]}
              />
              <Text
                style={[
                  styles.fullname,
                  {
                    color: 'rgba(0, 32, 77, 0.9)',
                  },
                  subtitleTypography.subtitle3,
                ]}>
                {item.fullname}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
              }}>
              <IconStar />
              <Text
                style={[
                  styles.fullname,
                  {
                    color: 'rgba(0, 32, 77, 0.6)',
                  },
                  buttonTextTypography.buttonText5,
                ]}>
                {item.rate}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 12}}>
              <Text
                style={[
                  titleTypographyMobile.title5,
                  {
                    marginRight: 4,
                    color: 'rgba(0, 32, 77, 1)',
                  },
                ]}>
                {item.priceSale?.toFixed(3)}đ
              </Text>
              <Text
                style={[
                  titleTypographyMobile.title5,
                  {
                    color: 'rgba(0, 32, 77, 1)',
                    textDecorationLine: 'line-through',
                  },
                ]}>
                {item.priceOrigin.toFixed(3)}đ
              </Text>
            </View>
            {/* <View style={styles.divider}></View> */}
          </View>
        )
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ListProduct;
