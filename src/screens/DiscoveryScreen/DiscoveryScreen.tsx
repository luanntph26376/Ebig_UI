import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  IconCart,
  IconMenu,
  IconMessage,
  IconNotification,
  IconSearch,
  IconStar,
} from '../../assets/icons';
import styles from './styles';
import images from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import topicFollows from '../../models/TopicFollow';
import product from '../../models/Product';
import expert from '../../models/Expert';
import LinearGradient from 'react-native-linear-gradient';
import {
  buttonTextTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';
import ListPostTrend from '../../components/ListPostTrend/ListPostTrend';
import ListCourseTrend from '../../components/ListCourseTrend/ListCourseTrend';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../App';

const listTopicFollow: Array<topicFollows> = [
  {index: 0, image: images.imageTopic1, name: 'Interaction Design'},
  {index: 1, image: images.imageTopic2, name: 'User Experience'},
  {index: 2, image: images.imageTopic3, name: 'Photography & Video'},
  {index: 3, image: images.imageTopic4, name: 'Illustration'},
  {index: 4, image: images.imageTopic5, name: 'Technology'},
  {index: 5, image: images.imageTopic6, name: 'Software Development'},
  {index: 6, image: images.imageTopic7, name: 'Web & App Design'},
  {index: 7, image: images.imageTopic8, name: 'Architecture & Spaces'},
];

const listProduct: Array<product> = [
  {
    index: 0,
    image: images.imageProduct,
    title: 'Columbia Men’s Bahama from Education Library Vent PFG Boat Shoe',
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    rate: '4.9 / 1321 Sales',
    priceSale: 565.0,
    priceOrigin: 797.0,
  },

  {
    index: 1,
    image: images.imageProduct,
    title: 'Columbia Men’s Bahama from Education Library Vent PFG Boat Shoe',
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    rate: '4.9 / 1321 Sales',
    priceSale: 565.0,
    priceOrigin: 797.0,
  },

  {
    index: 2,
    image: images.imageProduct,
    title: 'Columbia Men’s Bahama from Education Library Vent PFG Boat Shoe',
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    rate: '4.9 / 1321 Sales',
    priceSale: 565.0,
    priceOrigin: 797.0,
  },
];

const listExpert: Array<expert> = [
  {
    index: 0,
    image: images.imageExpert,
    fullname: 'Phan Minh Anh',
    major: 'UX Mentor',
  },
  {
    index: 1,
    image: images.imageExpert,
    fullname: 'Phan Minh Anh',
    major: 'UX Mentor',
  },
  {
    index: 2,
    image: images.imageExpert,
    fullname: 'Phan Minh Anh',
    major: 'UX Mentor',
  },
];

type Props = NativeStackScreenProps<RootStackParamsList, 'Discovery'>;

const DiscoveryScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <View style={styles.topAppBar}>
          <IconMenu />
          <Text style={[titleTypographyMobile.title1, styles.titleAppBar]}>
            Khám phá
          </Text>
          <View style={styles.actionIconsAppBar}>
            <View>
              <IconCart style={styles.actionIcons} />
              <Text style={[subtitleTypography.subtitle4, styles.countText]}>
                9
              </Text>
            </View>
            <View>
              <IconNotification style={styles.actionIcons} />
              <Text style={[subtitleTypography.subtitle4, styles.countText]}>
                9
              </Text>
            </View>
            <View>
              <IconMessage />
              <Text style={[subtitleTypography.subtitle4, styles.countText]}>
                9
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomAppBar}>
          <IconSearch />
          <TextInput placeholder="Tìm kiếm" style={styles.textInputSearch} />
        </View>
      </View>
      {/* Body */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        <View style={styles.topicFollows}>
          <Text style={[titleTypographyMobile.title2, styles.titleTopicFollow]}>
            Chủ đề được quan tâm nhiều
          </Text>
          <FlatList
            scrollEnabled={false}
            data={listTopicFollow}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.itemTopicFollow}
                onPress={() =>
                  navigation.navigate('DetailTopic', {title: item.name})
                }>
                <Image source={item.image} style={styles.imageTopicFollow} />
                <Text
                  style={[
                    titleTypographyMobile.title5,
                    styles.nameTopicFollow,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.divider}></View>
        <ListPostTrend />
        <View style={styles.productOutstanding}>
          <Text
            style={[
              titleTypographyMobile.title2,
              {marginLeft: 16, color: 'rgba(255, 255, 255, 1)'},
            ]}>
            Sản phẩm nổi bật trên Ebig
          </Text>
          <FlatList
            horizontal
            scrollEnabled={true}
            data={listProduct}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
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
                    {item.priceSale.toFixed(3)}đ
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
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={[
              styles.buttonMore,
              {borderColor: 'rgba(255, 255, 255, 1)', marginTop: 24},
            ]}>
            <Text
              style={[
                styles.textButtonMore,
                {color: 'rgba(255, 255, 255, 1)'},
              ]}>
              Xem thêm
            </Text>
          </View>
        </View>
        {ListCourseTrend('Khóa học xu hướng')}
        <View style={styles.leadingExperts}>
          <Text
            style={[
              titleTypographyMobile.title2,
              {marginLeft: 16, color: 'rgba(255, 255, 255, 1)'},
            ]}>
            Các chuyên gia hàng đầu
          </Text>
          <FlatList
            horizontal
            scrollEnabled={true}
            data={listExpert}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View
                style={{
                  marginLeft: 16,
                  marginRight: item.index == listExpert.length - 1 ? 16 : 8,
                  marginTop: 24,
                  width: 224,
                }}>
                <ImageBackground
                  source={item.image}
                  style={{
                    height: 290,
                    width: '100%',
                    borderRadius: 8,
                    justifyContent: 'flex-end',
                    overflow: 'hidden',
                  }}>
                  <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                    style={{padding: 16}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        lineHeight: 24,
                        color: 'rgba(255, 255, 255, 1)',
                      }}>
                      {item.fullname}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 22,
                        color: 'rgba(255, 255, 255, 1)',
                        marginTop: 4,
                      }}>
                      {item.major}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={[
              styles.buttonMore,
              {borderColor: 'rgba(255, 255, 255, 1)', marginTop: 24},
            ]}>
            <Text
              style={[
                styles.textButtonMore,
                {color: 'rgba(255, 255, 255, 1)'},
              ]}>
              Xem thêm
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoveryScreen;
