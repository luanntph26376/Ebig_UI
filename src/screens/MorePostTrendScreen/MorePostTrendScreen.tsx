import {Text, View, FlatList, Image, ScrollView} from 'react-native';
import {RootStackParamsList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';
import {
  IconBack,
  IconComment,
  IconLike,
  IconSave,
  IconShare,
} from '../../assets/icons';
import images from '../../assets/images';
import postTrend from '../../models/PostTrend';
import {
  bodyTextTypography,
  buttonTextTypography,
  labelTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';

type Props = NativeStackScreenProps<RootStackParamsList, 'MorePostTrend'>;

const listPostTrend: Array<postTrend> = [
  {
    index: 0,
    image: images.imagePost1,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    datetime: '12 tháng 09',
    title: '10 Principles of Good Website Design in 2023',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles are born. Something that was standard practice two years ago may no longer be effective today.',
    like: '1,2K',
    comment: '1,2K',
  },
  {
    index: 1,
    image: images.imagePost2,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    datetime: '12 tháng 09',
    title: '10 Principles of Good Website Design in 2023',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles are born. Something that was standard practice two years ago may no longer be effective today.',
    like: '1,2K',
    comment: '1,2K',
  },
  {
    index: 2,
    image: images.imagePost3,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    datetime: '12 tháng 09',
    title: 'The Ultimate Guide to Designing User-Friendly Data Tables',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles',
    like: '1,2K',
    comment: '1,2K',
  },
  {
    index: 3,
    image: images.imagePost4,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    datetime: '12 tháng 09',
    title: 'The Ultimate Guide to Designing User-Friendly Data Tables',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles',
    like: '1,2K',
    comment: '1,2K',
  },
  {
    index: 4,
    image: images.imagePost5,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    datetime: '12 tháng 09',
    title: 'The Ultimate Guide to Designing User-Friendly Data Tables',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles',
    like: '1,2K',
    comment: '1,2K',
  },
];

const MorePostTrendScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <IconBack onPress={() => navigation.goBack()} />
      </View>
      <ScrollView style={styles.body}>
        <Text
          style={[titleTypographyMobile.title2, {color: 'rgba(0, 32, 77, 1)'}]}>
          Bài viết xu hướng trong "{route.params?.title}"
        </Text>
        <FlatList
          scrollEnabled={false}
          data={listPostTrend}
          renderItem={({item}) => (
            <View
              style={{
                marginTop: 24,
                marginBottom: item.index == listPostTrend.length - 1 ? 24 : 0,
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

export default MorePostTrendScreen;
