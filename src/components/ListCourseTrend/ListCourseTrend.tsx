import images from '../../assets/images';
import course from '../../models/course';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {titleTypographyMobile} from '../Typography/typo_skin';
import {IconPersonOutline, IconStarOutline} from '../../assets/icons';

const listCourseTrend: Array<course> = [
  {
    index: 0,
    image: images.imageCourse,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    title: 'Thiết kế UI/UX dành cho người mới bắt đầu',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles',
    member: '1,2k',
    rate: '4.7 (1k1)',
    price: 235000,
  },
  {
    index: 1,
    image: images.imageCourse,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    title: 'Thiết kế UI/UX dành cho người mới bắt đầu',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles',
    member: '1,2k',
    rate: '4.7 (1k1)',
    price: 235000,
  },
  {
    index: 2,
    image: images.imageCourse,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    title: 'Thiết kế UI/UX dành cho người mới bắt đầu',
    content:
      'The world of website design is constantly evolving. As new technologies emerge, new website design principles',
    member: '1,2k',
    rate: '4.7 (1k1)',
    price: 235000,
  },
];

const ListCourseTrend = (title: string) => {
  return (
    <View style={styles.courseTrend}>
      <Text style={[titleTypographyMobile.title2, styles.titlePostTrend]}>
        {title}
      </Text>
      <FlatList
        scrollEnabled={false}
        data={listCourseTrend}
        renderItem={({item}) => (
          <View
            style={{
              marginTop: 24,
            }}>
            <Image source={item.image} style={styles.imagePostStyle1} />
            <View style={styles.containerAuthorDatetime}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.fullname}>{item.fullname}</Text>
              <Text style={[styles.dotSpace, {color: 'rgba(0, 32, 77, 0.9)'}]}>
                ·
              </Text>
              <View
                style={{
                  backgroundColor: 'rgba(237, 242, 253, 1)',
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                  borderRadius: 100,
                }}>
                <Text
                  style={{
                    color: 'rgba(54, 106, 226, 1)',
                    fontSize: 12,
                    fontWeight: '400',
                    lineHeight: 16,
                  }}>
                  Course
                </Text>
              </View>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text
              style={[styles.content, {marginBottom: 12}]}
              numberOfLines={3}
              ellipsizeMode="tail">
              {item.content}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
              }}>
              <IconPersonOutline />
              <Text style={styles.like}>{item.member}</Text>
              <IconStarOutline />
              <Text style={styles.comment}>{item.rate}</Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                lineHeight: 24,
                color: 'rgba(0, 32, 77, 1)',
                marginBottom: 24,
              }}>
              {item.price.toLocaleString()}đ
            </Text>
            {item.index == listCourseTrend.length - 1 ? (
              <View style={styles.buttonMore}>
                <Text style={styles.textButtonMore}>Xem thêm</Text>
              </View>
            ) : (
              <View style={styles.divider}></View>
            )}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ListCourseTrend;
