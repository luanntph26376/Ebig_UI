import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {IconBack, IconSave, IconShare} from '../../assets/icons';
import topicFollows from '../../models/TopicFollow';
import images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import postMostReader from '../../models/PostMostReader';
import expert from '../../models/Expert';
import ListPostTrend from '../../components/ListPostTrend/ListPostTrend';
import ListCourseTrend from '../../components/ListCourseTrend/ListCourseTrend';
import {RootStackParamsList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const listTopicOther: Array<topicFollows> = [
  {index: 0, image: images.imageTopicOther, name: 'Product Design'},
  {index: 1, image: images.imageTopicOther, name: 'User Research'},
  {index: 2, image: images.imageTopicOther, name: 'User Research'},
];

const listPostMostReader: Array<postMostReader> = [
  {
    index: 0,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    title: 'Website Design Tips & Inspiration',
    totalPost: 10,
    totalPostSaved: 100,
  },
  {
    index: 1,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    title: 'Website Design Tips & Inspiration',
    totalPost: 10,
    totalPostSaved: 100,
  },
  {
    index: 2,
    avatar: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    title: 'Website Design Tips & Inspiration',
    totalPost: 10,
    totalPostSaved: 100,
  },
];

const listTopExpert: Array<expert> = [
  {
    index: 0,
    image: images.imageAvatar,
    fullname: 'Phan Minh Anh',
    major: 'I am Java programmer, blogger, working on Java, J2EE, UNI...',
    followers: 375,
  },
  {
    index: 1,
    image: images.imageAvatar2,
    fullname: 'Tran Trung',
    major: 'I am Java programmer, blogger, working on Java, J2EE, UNI...',
    followers: 375,
  },
];

type Props = NativeStackScreenProps<RootStackParamsList, 'DetailTopic'>;

const DetailTopicScreen = ({navigation, route}: Props) => {
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
        <View style={styles.topicOther}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 28,
              marginLeft: 16,
              color: 'rgba(0, 32, 77, 1)',
            }}>
            Khám phá các chủ đề liên quan khác
          </Text>
          <FlatList
            data={listTopicOther}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    marginLeft: 16,
                    marginRight:
                      item.index == listTopicOther.length - 1 ? 16 : 8,
                    marginTop: 24,
                    width: 120,
                    borderRadius: 8,
                    overflow: 'hidden',
                  }}
                  onPress={() => {
                    navigation.navigate('DetailTopicOther', {title: item.name});
                  }}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      width: '100%',
                      height: 140,
                      justifyContent: 'flex-end',
                    }}>
                    <LinearGradient
                      colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.8)']}
                      style={{padding: 16}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          lineHeight: 24,
                          color: 'rgba(255, 255, 255, 1)',
                        }}>
                        {item.name}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <ListPostTrend
          onLoadMore={() => {
            navigation.navigate('MorePostTrend', {title: route.params?.title!});
          }}
        />
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
          <FlatList
            scrollEnabled={false}
            data={listPostMostReader}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  marginTop: 24,
                }}
                onPress={() => {
                  navigation.navigate('DetailCategoryPost');
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
                  <ScrollView
                    scrollEnabled={true}
                    horizontal
                    showsHorizontalScrollIndicator={false}>
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
                  <TouchableOpacity
                    style={[styles.buttonMore, {marginTop: 24}]}>
                    <Text style={styles.textButtonMore}>Xem thêm</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={[styles.divider, {marginTop: 24}]}></View>
                )}
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
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
          <TouchableOpacity
            style={[
              styles.buttonMore,
              {borderColor: 'rgba(54, 106, 226, 1)', marginTop: 24},
            ]}
            onPress={() => {
              navigation.navigate('TopExpert', {title: route.params?.title!});
            }}>
            <Text
              style={[styles.textButtonMore, {color: 'rgba(54, 106, 226, 1)'}]}>
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>
        {ListCourseTrend('Học tập cùng chuyên gia')}
      </ScrollView>
    </View>
  );
};

export default DetailTopicScreen;
