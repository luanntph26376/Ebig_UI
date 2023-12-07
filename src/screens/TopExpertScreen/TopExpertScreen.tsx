import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {RootStackParamsList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IconBack} from '../../assets/icons';
import {
  titleTypographyMobile,
} from '../../components/Typography/typo_skin';
import listTopExpert from '../../components/Data/listTopExpert';
import ListTopExpert from '../../components/ListTopExpert/ListTopExpert';

type Props = NativeStackScreenProps<RootStackParamsList, 'TopExpert'>;

const TopExpertScreen = ({navigation, route}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <IconBack onPress={() => navigation.goBack()} />
        <Text
          style={[
            titleTypographyMobile.title3,
            {color: 'rgba(0, 32, 77, 1)', textAlign: 'center', flex: 1},
          ]}>
          Top chuyên gia
        </Text>
      </View>
      <ScrollView style={styles.body}>
        <Text
          style={[
            titleTypographyMobile.title2,
            {
              color: 'rgba(0, 32, 77, 1)',
              paddingVertical: 24,
              paddingHorizontal: 16,
            },
          ]}>
          Các chuyên gia hàng đầu trong “{route.params?.title}”
        </Text>
        <View style={styles.divider}></View>
        <ListTopExpert listTopExpert={listTopExpert} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default TopExpertScreen;
