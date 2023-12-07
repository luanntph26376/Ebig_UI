import {View, Text} from 'react-native';
import React from 'react';
import ListTopExpert from '../../../components/ListTopExpert/ListTopExpert';
import expert from '../../../models/Expert';

interface ExpertTabProps {
  listTopExpert: Array<expert>;
}

const ExpertTab: React.FC<ExpertTabProps> = ({listTopExpert}) => {
  return (
    <View style={{flex: 1}}>
      <ListTopExpert listTopExpert={listTopExpert} scrollEnabled={true} />
    </View>
  );
};

export default ExpertTab;
