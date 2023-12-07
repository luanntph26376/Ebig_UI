import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../App';
import styles from './styles';
import {
  IconBack,
  IconComment,
  IconLike,
  IconSave,
  IconShare,
} from '../../assets/icons';
import images from '../../assets/images';
import {
  bodyTextTypography,
  buttonTextTypography,
  labelTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';
import listPostTrend from '../../components/Data/listPostTrend';

type Props = NativeStackScreenProps<RootStackParamsList, 'DetailCategoryPost'>;

const DetailCategoryPostScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <IconBack onPress={() => navigation.goBack()} />
        <IconShare />
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <Image
              source={images.imageAvatar}
              style={{width: 48, height: 48, marginRight: 12}}
            />
            <View>
              <Text
                style={[
                  titleTypographyMobile.title3,
                  {color: 'rgba(0, 32, 77, 1)'},
                ]}>
                Phan Minh Anh
              </Text>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <Text
                  style={[
                    subtitleTypography.subtitle2,
                    {color: 'rgba(0, 32, 77, 0.6)'},
                  ]}>
                  20 Bài viết
                </Text>
                <Text
                  style={[
                    subtitleTypography.subtitle2,
                    {color: 'rgba(0, 32, 77, 0.6)', marginHorizontal: 8},
                  ]}>
                  ·
                </Text>
                <Text
                  style={[
                    subtitleTypography.subtitle2,
                    {color: 'rgba(0, 32, 77, 0.6)'},
                  ]}>
                  100 Đã lưu
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[
              titleTypographyMobile.title2,
              {color: 'rgba(0, 32, 77, 1)'},
            ]}>
            Website Design Tips & Inspiration
          </Text>
          <Text
            style={[
              subtitleTypography.subtitle1,
              {color: 'rgba(0, 32, 77, 0.6)', marginTop: 4},
            ]}>
            A collection of the best stories published in The Writing
            Cooperative.
          </Text>
        </View>
        <View style={styles.divider}></View>
        <FlatList
          scrollEnabled={false}
          data={listPostTrend}
          renderItem={({item}) => (
            <View
              style={{
                marginTop: 24,
                marginHorizontal: 16,
              }}>
              <View style={styles.containerPostStyle2}>
                <Image source={item.avatar} style={styles.avatar} />
                <Text style={[labelTypography.label3, styles.fullname]}>
                  {item.fullname}
                </Text>
                <Text style={[labelTypography.label3, styles.dotSpace]}>·</Text>
                <Text style={[subtitleTypography.subtitle2, styles.datetime]}>
                  {item.datetime}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Text style={[titleTypographyMobile.title3, styles.title]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[bodyTextTypography.bodyText1, styles.content]}
                    numberOfLines={3}
                    ellipsizeMode="tail">
                    {item.content}
                  </Text>
                </View>
                <Image source={item.image} style={styles.imagePostStyle2} />
              </View>
              <View style={styles.containerActions}>
                <View style={styles.containerLikeCmt}>
                  <IconLike />
                  <Text style={[buttonTextTypography.buttonText2, styles.like]}>
                    {item.like}
                  </Text>
                  <IconComment />
                  <Text
                    style={[buttonTextTypography.buttonText2, styles.comment]}>
                    {item.comment}
                  </Text>
                </View>
                <View style={styles.containerSaveShare}>
                  <IconSave style={styles.iconSave} />
                  <IconShare />
                </View>
              </View>
              <View style={styles.divider}></View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default DetailCategoryPostScreen;
