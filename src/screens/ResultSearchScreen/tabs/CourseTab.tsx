import {View, Text} from 'react-native';
import React from 'react';
import ListCourseTrend from '../../../components/ListCourseTrend/ListCourseTrend';
import listCourseTrend from '../../../components/Data/listCourseTrend';

const CourseTab = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <ListCourseTrend listCourseTrend={listCourseTrend} scrollEnabled={true} />
    </View>
  );
};

export default CourseTab;
