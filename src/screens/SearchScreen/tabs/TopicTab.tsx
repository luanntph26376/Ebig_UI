import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {IconTopic} from '../../../assets/icons';
import {
  buttonTextTypography,
  labelTypography,
  subtitleTypography,
} from '../../../components/Typography/typo_skin';

type topic = {
  title: string;
  countPost: number;
  countFollow: number;
  isFollow: boolean;
};

const listTopic: Array<topic> = [
  {
    title: 'UI',
    countPost: 339000,
    countFollow: 111000,
    isFollow: true,
  },
  {
    title: 'UI Design',
    countPost: 339000,
    countFollow: 111000,
    isFollow: false,
  },
  {
    title: 'UI UX',
    countPost: 339000,
    countFollow: 111000,
    isFollow: true,
  },
  {
    title: 'UI Case Study',
    countPost: 339000,
    countFollow: 111000,
    isFollow: false,
  },
  {
    title: 'UI Testing',
    countPost: 339000,
    countFollow: 111000,
    isFollow: false,
  },
];

const TopicTab = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <FlatList
        data={listTopic}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{marginTop: 24, flexDirection: 'row'}}>
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: 'rgba(242, 245, 248, 1)',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 12,
              }}>
              <IconTopic />
            </View>
            <View style={{flex: 1}}>
              <Text
                style={[labelTypography.label1, {color: 'rgba(0, 32, 77, 1)'}]}>
                {item.title}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    subtitleTypography.subtitle2,
                    {
                      color: 'rgba(0, 32, 77, 0.6)',
                    },
                  ]}>
                  {item.countPost >= 1000
                    ? (item.countPost / 1000).toFixed(1) + 'K'
                    : item.countPost.toString()}{' '}
                  Bài viết ·{' '}
                  {item.countFollow >= 1000
                    ? (item.countFollow / 1000).toFixed(1) + 'K'
                    : item.countFollow.toString()}{' '}
                  Theo dõi
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor:
                  item.isFollow == false ? 'rgba(54, 106, 226, 1)' : 'white',
                borderWidth: 1,
                borderColor: 'rgba(54, 106, 226, 1)',
                height: 32,
                borderRadius: 24,
                justifyContent: 'center',
                paddingVertical: 4,
                paddingHorizontal: 11,
              }}>
              <Text
                style={[
                  buttonTextTypography.buttonText2,
                  {
                    color:
                      item.isFollow == false
                        ? 'white'
                        : 'rgba(54, 106, 226, 1)',
                  },
                ]}>
                {item.isFollow == true ? 'Đang theo dõi' : 'Theo dõi'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default TopicTab;
