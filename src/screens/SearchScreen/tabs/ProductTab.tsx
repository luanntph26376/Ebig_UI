import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {listProduct_2} from '../../../components/Data/listProduct';
import {
  buttonTextTypography,
  labelTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../../../components/Typography/typo_skin';
import {
  IconCart,
  IconCartFilled,
  IconPersonOutline,
  IconStar,
  IconStarOutline,
} from '../../../assets/icons';

const ProductTab = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listProduct_2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{marginTop: 24}}>
            <Image
              source={item.image}
              style={{width: '100%', height: 254, borderRadius: 8}}
            />
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Image
                source={item.avatar}
                style={{width: 24, height: 24, borderRadius: 1000}}
              />
              <Text
                style={[
                  labelTypography.label3,
                  {color: 'rgba(0, 32, 77, 0.9)', marginLeft: 8},
                ]}>
                {item.fullname}
              </Text>
              <Text
                style={[
                  labelTypography.label3,
                  {color: 'rgba(0, 32, 77, 0.6)', marginHorizontal: 4},
                ]}>
                ·
              </Text>
              <Text
                style={[
                  subtitleTypography.subtitle2,
                  {color: 'rgba(0, 32, 77, 0.6)'},
                ]}>
                {item.datetime}
              </Text>
            </View>
            <Text
              style={[
                titleTypographyMobile.title3,
                {
                  marginVertical: 8,
                  color: 'rgba(0, 32, 77, 1)',
                },
              ]}>
              {item.title}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconPersonOutline />
              <Text
                style={[
                  buttonTextTypography.buttonText2,
                  {
                    color: 'rgba(0, 32, 77, 0.6)',
                    marginLeft: 4,
                    marginRight: 16,
                  },
                ]}>
                {item.follow}
              </Text>
              <IconStarOutline />
              <Text
                style={[
                  buttonTextTypography.buttonText2,
                  {color: 'rgba(0, 32, 77, 0.6)', marginLeft: 4},
                ]}>
                {item.rate}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 18,
              }}>
              <Text
                style={[
                  titleTypographyMobile.title2,
                  {color: 'rgba(0, 32, 77, 1)', flex: 1},
                ]}>
                {item.priceOrigin.toLocaleString()}đ
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(242, 245, 248, 1)',
                  padding: 8,
                  borderRadius: 1000,
                }}>
                <IconCartFilled />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'rgba(0, 53, 128, 0.08)',
                marginTop: 24,
              }}></View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductTab;
