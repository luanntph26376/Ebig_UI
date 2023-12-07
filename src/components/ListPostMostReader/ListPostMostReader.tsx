import {View, Text, FlatList, Image, ScrollView} from 'react-native';
import React from 'react';
import {IconSave} from '../../assets/icons';
import images from '../../assets/images';
import styles from './styles';
import postMostReader from '../../models/PostMostReader';

interface ListPostMostReaderProps {
  listPostMostReader: Array<postMostReader>;
  scrollEnabled: boolean;
}

const ListPostMostReader: React.FC<ListPostMostReaderProps> = ({
  listPostMostReader,
  scrollEnabled,
}) => {
  return (
    <FlatList
      scrollEnabled={scrollEnabled}
      data={listPostMostReader}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <View
          style={{
            marginTop: 24,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(242, 245, 248, 1)',
              borderColor: 'rgba(0, 53, 128, 0.08)',
              borderWidth: 1,
              borderRadius: 8,
              overflow: 'hidden',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 16,
                marginTop: 16,
                marginBottom: 12,
              }}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.fullname}>{item.fullname}</Text>
            </View>
            <View style={{marginHorizontal: 16}}>
              <Text style={styles.title}>{item.title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginRight: 8,
                    marginBottom: 12,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 22,
                      color: 'rgba(0, 32, 77, 0.6)',
                    }}>
                    {item.totalPost} Bài viết
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 22,
                      color: 'rgba(0, 32, 77, 0.6)',
                      marginHorizontal: 4,
                    }}>
                    ·
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 22,
                      color: 'rgba(0, 32, 77, 0.6)',
                    }}>
                    {item.totalPostSaved} Đã lưu
                  </Text>
                </View>
                <IconSave />
              </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image
                source={images.imagePost3}
                style={{height: 122, width: 163, marginRight: 4}}
              />
              <Image
                source={images.imagePost2}
                style={{height: 122, width: 163, marginRight: 4}}
              />
              <Image
                source={images.imagePost3}
                style={{height: 122, width: 163}}
              />
            </ScrollView>
          </View>
          {item.index == listPostMostReader.length - 1 ? (
            <View style={[styles.buttonMore, {marginTop: 24}]}>
              <Text style={styles.textButtonMore}>Xem thêm</Text>
            </View>
          ) : (
            <View style={[styles.divider, {marginTop: 24}]}></View>
          )}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default ListPostMostReader;
