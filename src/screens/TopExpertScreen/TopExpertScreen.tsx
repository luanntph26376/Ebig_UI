import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {RootStackParamsList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IconBack} from '../../assets/icons';
import {
  buttonTextTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';
import expert from '../../models/Expert';
import images from '../../assets/images';

type Props = NativeStackScreenProps<RootStackParamsList, 'TopExpert'>;

const listTopExpert: Array<expert> = [
  {
    index: 0,
    image: images.imageAvatar3,
    fullname: 'Phuong Nguyen',
    about:
      'I read 100+ books a year and write about my self improvement journey. Writer, editor, and podcast host.',
  },
  {
    index: 1,
    image: images.imageAvatar4,
    fullname: 'Phan Minh Anh',
    about:
      'I read 100+ books a year and write about my self improvement journey. Writer, editor, and podcast host.',
  },
  {
    index: 2,
    image: images.imageAvatar4,
    fullname: 'Le Minh',
    about:
      'I read 100+ books a year and write about my self improvement journey. Writer, editor, and podcast host.',
  },
  {
    index: 3,
    image: images.imageAvatar5,
    fullname: 'Ha Linh',
    about:
      'I read 100+ books a year and write about my self improvement journey. Writer, editor, and podcast host.',
  },
  {
    index: 4,
    image: images.imageAvatar6,
    fullname: 'Nguyen Quang Trung',
    about:
      'I read 100+ books a year and write about my self improvement journey. Writer, editor, and podcast host.',
  },
  {
    index: 5,
    image: images.imageAvatar5,
    fullname: 'Nguyen Quang Trung',
    about:
      'I read 100+ books a year and write about my self improvement journey. Writer, editor, and podcast host.',
  },
];

const TopExpertScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <IconBack onPress={() => navigation.goBack()} />
        <Text
          style={[
            titleTypographyMobile.title3,
            {color: 'rgba(0, 32, 77, 1)', textAlign: 'center', flex: 1},
          ]}>
          Top chuyên gia
        </Text>
      </View>
      <ScrollView style={styles.body}>
        <Text
          style={[
            titleTypographyMobile.title2,
            {
              color: 'rgba(0, 32, 77, 1)',
              paddingVertical: 24,
              paddingHorizontal: 16,
            },
          ]}>
          Các chuyên gia hàng đầu trong “{route.params?.title}”
        </Text>
        <View style={styles.divider}></View>
        <FlatList
          scrollEnabled={false}
          data={listTopExpert}
          renderItem={({item}) => (
            <View
              style={{
                // width: '100%',
                marginTop: 24,
                flexDirection: 'row',
                marginHorizontal: 16,
                marginBottom: item.index == listTopExpert.length - 1 ? 24 : 0,
              }}>
              <Image
                source={item.image}
                style={{width: 40, height: 40, marginRight: 12}}
              />
              <View style={{flexDirection: 'column', flex: 1}}>
                <Text
                  style={[
                    titleTypographyMobile.title3,
                    {color: 'rgba(0, 32, 77, 1)'},
                  ]}>
                  {item.fullname}
                </Text>
                <Text numberOfLines={3} ellipsizeMode="tail">
                  {item.about}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(54, 106, 226, 1)',
                  paddingVertical: 5,
                  paddingHorizontal: 12,
                  justifyContent: 'center',
                  borderRadius: 24,
                  height: 32,
                  //   flex: 1,
                }}>
                <Text
                  style={[
                    buttonTextTypography.buttonText2,
                    {color: 'rgba(255, 255, 255, 1)'},
                  ]}>
                  Theo dõi
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default TopExpertScreen;
