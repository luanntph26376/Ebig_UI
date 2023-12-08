import {View} from 'react-native';
import React from 'react';
import postMostReader from '../../../models/PostMostReader';
import ListPostMostReader from '../../../components/ListPostMostReader/ListPostMostReader';

interface CategoryPostProps {
  listPostMostReader: Array<postMostReader>;
}

const CategoryPost: React.FC<CategoryPostProps> = ({listPostMostReader}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <ListPostMostReader
        listPostMostReader={listPostMostReader}
        scrollEnabled={true}
      />
    </View>
  );
};

export default CategoryPost;
