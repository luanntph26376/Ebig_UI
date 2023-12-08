import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../App';
import styles from './styles';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import PostTab from './tabs/PostTab';
import CategoryPost from './tabs/CategoryPost';
import TopicTab from './tabs/TopicTab';
import CourseTab from './tabs/CourseTab';
import ProductTab from './tabs/ProductTab';
import ExpertTab from './tabs/ExpertTab';
import listTopExpert from '../../components/Data/listTopExpert';
import listPostTrend from '../../components/Data/listPostTrend';
import {IconBack} from '../../assets/icons';
import {
  labelTypography,
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';
import listPostMostReader from '../../components/Data/listPostMostReader';
import InputSearch from '../../components/InputSearch/InputSearch';

type Props = NativeStackScreenProps<RootStackParamsList, 'ResultSearch'>;

const renderScene = SceneMap({
  post: () => <PostTab listPostTrend={listPostTrend} />,
  categoryPost: () => <CategoryPost listPostMostReader={listPostMostReader} />,
  expert: () => <ExpertTab listTopExpert={listTopExpert} />,
  topic: TopicTab,
  course: CourseTab,
  product: ProductTab,
});

const ResultSearchScreen = ({navigation, route}: Props) => {
  const [isHidden, setisHidden] = useState(false);
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
        <InputSearch
          onTextChange={val => console.log(val)}
          autoFocus={false}
          value={route.params?.search}
        />
      </View>
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

export default ResultSearchScreen;
