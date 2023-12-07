import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {RootStackParamsList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IconBack, IconDelete, IconSearch} from '../../assets/icons';
import styles from './styles';
import InputSearch from '../../components/InputSearch/InputSearch';
import {
  labelTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import PostTab from './tabs/PostTab';
import CategoryPost from './tabs/CategoryPost';
import ExpertTab from './tabs/ExpertTab';
import TopicTab from './tabs/TopicTab';
import CourseTab from './tabs/CourseTab';
import ProductTab from './tabs/ProductTab';
import listPostTrend from '../../components/Data/listPostTrend';
import listPostMostReader from '../../components/Data/listPostMostReader';
import listTopExpert from '../../components/Data/listTopExpert';
import {Svg, SvgXml} from 'react-native-svg';
import FIcon from '../../components/Icons/FIcon';
import FFilled from '../../components/Icons/FFilled';

type Props = NativeStackScreenProps<RootStackParamsList, 'Search'>;

const listHistorySearch: Array<string> = [
  'UIUX design',
  'Software',
  'App design',
];

const renderScene = SceneMap({
  post: () => <PostTab listPostTrend={listPostTrend} />,
  categoryPost: () => <CategoryPost listPostMostReader={listPostMostReader} />,
  expert: () => <ExpertTab listTopExpert={listTopExpert} />,
  topic: TopicTab,
  course: CourseTab,
  product: ProductTab,
});

const SearchScreen = ({navigation}: Props) => {
  const [isHidden, setisHidden] = useState(true);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'post', title: 'Bài viết'},
    {key: 'categoryPost', title: 'Danh mục bài viết'},
    {key: 'expert', title: 'Chuyên gia'},
    {key: 'topic', title: 'Chủ đề'},
    {key: 'course', title: 'Khoá học'},
    {key: 'product', title: 'Sản phẩm'},
  ]);

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.appBar}>
        <View style={styles.topAppBar}>
          <IconBack onPress={() => navigation.goBack()} />
          <Text style={[titleTypographyMobile.title3, styles.titleAppBar]}>
            Khám phá
          </Text>
          {/* <FIcon icon={FFilled.triggle_left} /> */}
        </View>
        <InputSearch onTextChange={val => console.log(val)} autoFocus={true} />
      </View>
      {/* View 1 */}
      {!isHidden && (
        <View style={{paddingVertical: 24, paddingHorizontal: 16}}>
          <Text
            style={[
              titleTypographyMobile.title2,
              {color: 'rgba(0, 32, 77, 1)', marginBottom: 24},
            ]}>
            Tìm kiếm gần đây
          </Text>
          <FlatList
            data={listHistorySearch}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  padding: 18,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <IconSearch width={20} height={20} />
                <Text
                  style={[
                    titleTypographyMobile.title4,
                    {
                      flex: 1,
                      marginLeft: 12,
                      marginRight: 16,
                      color: 'rgba(0, 32, 77, 1)',
                    },
                  ]}>
                  {item}
                </Text>
                <IconDelete width={16} height={16} />
              </View>
            )}
          />
        </View>
      )}

      {/* View 2 */}
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            labelStyle={[labelTypography.label3, styles.label]}
            indicatorStyle={styles.indicator}
            scrollEnabled={true}
            activeColor="rgba(54, 106, 226, 1)"
            tabStyle={styles.tabStyle}
          />
        )}
      />
    </View>
  );
};

export default SearchScreen;
