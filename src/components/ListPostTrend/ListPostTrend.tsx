import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {IconComment, IconLike, IconSave, IconShare} from '../../assets/icons';
import styles from './styles';
import {
  bodyTextTypography,
  buttonTextTypography,
  labelTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../Typography/typo_skin';
import postTrend from '../../models/PostTrend';
import images from '../../assets/images';

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

interface ListPostTrendProps {
  onLoadMore?: () => void;
}

const ListPostTrend: React.FC<ListPostTrendProps> = ({onLoadMore}) => {
  return (
    <View style={styles.postTrend}>
      <Text style={[titleTypographyMobile.title2, styles.titlePostTrend]}>
        Bài viết xu hướng
      </Text>
      <FlatList
        scrollEnabled={false}
        data={listPostTrend}
        renderItem={({item}) =>
          item.index < 2 ? (
            <View
              style={{
                marginTop: 24,
              }}>
              <Image source={item.image} style={styles.imagePostStyle1} />
              <View style={styles.containerAuthorDatetime}>
                <Image source={item.avatar} style={styles.avatar} />
                <Text style={[labelTypography.label3, styles.fullname]}>
                  {item.fullname}
                </Text>
                <Text style={[labelTypography.label3, styles.dotSpace]}>·</Text>
                <Text style={[subtitleTypography.subtitle2, styles.datetime]}>
                  {item.datetime}
                </Text>
              </View>
              <Text style={[titleTypographyMobile.title3, styles.title]}>
                {item.title}
              </Text>
              <Text
                style={[bodyTextTypography.bodyText1, styles.content]}
                numberOfLines={3}
                ellipsizeMode="tail">
                {item.content}
              </Text>
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
              {item.index == listPostTrend.length - 1 ? (
                <View style={styles.buttonMore}>
                  <Text
                    style={[
                      buttonTextTypography.buttonText2,
                      styles.textButtonMore,
                    ]}>
                    Xem thêm
                  </Text>
                </View>
              ) : (
                <View style={styles.divider}></View>
              )}
            </View>
          ) : (
            <View
              style={{
                marginTop: 24,
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
              {item.index == listPostTrend.length - 1 ? (
                <TouchableOpacity
                  style={styles.buttonMore}
                  onPress={onLoadMore}>
                  <Text
                    style={[
                      buttonTextTypography.buttonText2,
                      styles.textButtonMore,
                    ]}>
                    Xem thêm
                  </Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.divider}></View>
              )}
            </View>
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListPostTrend;
