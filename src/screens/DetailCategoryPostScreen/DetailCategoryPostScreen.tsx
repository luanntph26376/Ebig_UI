import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../App';
import styles from './styles';
import {IconBack, IconShare} from '../../assets/icons';
import images from '../../assets/images';
import {
  subtitleTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';

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
      </ScrollView>
    </View>
  );
};

export default DetailCategoryPostScreen;
