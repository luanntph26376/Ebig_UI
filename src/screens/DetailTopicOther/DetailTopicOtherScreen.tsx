import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../App';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {IconBack, IconSave, IconShare} from '../../assets/icons';
import images from '../../assets/images';
import ListCourseTrend from '../../components/ListCourseTrend/ListCourseTrend';
import ListPostTrend from '../../components/ListPostTrend/ListPostTrend';
import listPostMostReader from '../../components/Data/listPostMostReader';
import listTopExpert from '../../components/Data/listTopExpert';
import ListPostMostReader from '../../components/ListPostMostReader/ListPostMostReader';

type Props = NativeStackScreenProps<RootStackParamsList, 'DetailTopicOther'>;

const DetailTopicOtherScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <IconBack onPress={() => navigation.goBack()} />
        <Text style={styles.titleAppBar}>Chủ đề</Text>
        <IconShare />
      </View>
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.titleTopic}>{route.params?.title}</Text>
          <View style={styles.containerInfoTopic}>
            <Text style={styles.infoTopic}>1.9M Người theo dõi</Text>
            <Text style={[styles.infoTopic, {marginHorizontal: 8}]}>·</Text>
            <Text style={styles.infoTopic}>200 Bài viết</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(54, 106, 226, 1)',
              borderRadius: 24,
              paddingVertical: 9,
              paddingHorizontal: 16,
              marginTop: 25,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 22,
                color: 'rgba(255, 255, 255, 1)',
              }}>
              Theo dõi Topic
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider}></View>
        <ListPostTrend />
        <View style={styles.divider}></View>
        <View style={styles.postMostReader}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 28,
              color: 'rgba(0, 32, 77, 1)',
            }}>
            Danh mục bài viết nhiều người đọc
          </Text>
          <ListPostMostReader
            listPostMostReader={listPostMostReader}
            scrollEnabled={false}
          />
        </View>
        <View style={styles.topExpert}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 28,
              color: 'rgba(0, 32, 77, 1)',
              marginLeft: 16,
            }}>
            Top các chuyên gia
          </Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginTop: 24,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: 'rgba(0, 53, 128, 0.08)',
                    paddingVertical: 20,
                    paddingHorizontal: 16,
                    alignItems: 'center',
                    width: 224,
                    marginLeft: 16,
                    marginRight:
                      item.index == listTopExpert.length - 1 ? 16 : 8,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 56, height: 56, borderRadius: 1000}}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      lineHeight: 24,
                      color: 'rgba(0, 32, 77, 1)',
                      marginTop: 16,
                    }}>
                    {item.fullname}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      lineHeight: 16,
                      color: 'rgba(0, 32, 77, 0.6)',
                      marginTop: 4,
                    }}>
                    {item.followers} Người theo dõi
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      lineHeight: 22,
                      color: 'rgba(0, 32, 77, 0.8)',
                      marginTop: 12,
                      textAlign: 'center',
                    }}>
                    {item.major}
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'rgba(29, 80, 201, 1)',
                      borderRadius: 24,
                      paddingVertical: 9,
                      paddingHorizontal: 16,
                      marginTop: 25,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 14,
                        lineHeight: 22,
                      }}>
                      Theo dõi
                    </Text>
                  </View>
                </View>
              );
            }}
            data={listTopExpert}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
          <View
            style={[
              styles.buttonMore,
              {borderColor: 'rgba(54, 106, 226, 1)', marginTop: 24},
            ]}>
            <Text
              style={[styles.textButtonMore, {color: 'rgba(54, 106, 226, 1)'}]}>
              Xem thêm
            </Text>
          </View>
        </View>
        {ListCourseTrend('Học tập cùng chuyên gia')}
      </ScrollView>
    </View>
  );
};

export default DetailTopicOtherScreen;
