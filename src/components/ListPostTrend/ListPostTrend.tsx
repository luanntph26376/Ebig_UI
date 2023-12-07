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
import listPostTrend from '../Data/listPostTrend';

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
        showsVerticalScrollIndicator={false}
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
