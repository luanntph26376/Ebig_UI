import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import postTrend from '../../../models/PostTrend';
import {
  bodyTextTypography,
  buttonTextTypography,
  labelTypography,
  subtitleTypography,
  titleTypographyMobile,
} from '../../../components/Typography/typo_skin';
import {
  IconComment,
  IconLike,
  IconSave,
  IconShare,
} from '../../../assets/icons';

interface PostTabProps {
  listPostTrend: Array<postTrend>;
}

const PostTab: React.FC<PostTabProps> = ({listPostTrend}) => {
  return (
    <FlatList
      data={listPostTrend}
      renderItem={({item}) => (
        <View
          style={{
            marginTop: 24,
            marginBottom: item.index == listPostTrend.length - 1 ? 24 : 0,
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
              <Text style={[buttonTextTypography.buttonText2, styles.comment]}>
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
  );
};

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 53, 128, 0.08)',
  },

  postTrend: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },

  titlePostTrend: {
    color: 'rgba(0, 32, 77, 1)',
  },

  imagePostStyle1: {height: 192, width: '100%', borderRadius: 8},

  containerAuthorDatetime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 1000,
  },

  fullname: {
    color: 'rgba(0, 32, 77, 0.9)',
    marginLeft: 8,
  },

  dotSpace: {
    color: 'rgba(0, 32, 77, 0.6)',
    marginHorizontal: 4,
  },

  datetime: {
    color: 'rgba(0, 32, 77, 0.6)',
  },

  title: {
    color: 'rgba(0, 32, 77, 1)',
    marginBottom: 8,
  },

  content: {
    color: 'rgba(0, 32, 77, 0.8)',
    marginBottom: 16,
  },

  containerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    alignItems: 'center',
  },

  containerLikeCmt: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  like: {
    marginLeft: 4,
    marginRight: 16,
    color: 'rgba(0, 32, 77, 0.6)',
  },

  comment: {marginLeft: 4, color: 'rgba(0, 32, 77, 0.6)'},

  containerSaveShare: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerPostStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  imagePostStyle2: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  iconSave: {marginRight: 16},

  buttonMore: {
    borderWidth: 1,
    borderColor: 'rgba(54, 106, 226, 1)',
    borderRadius: 24,
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },

  textButtonMore: {
    color: 'rgba(54, 106, 226, 1)',
  },
});

export default PostTab;
