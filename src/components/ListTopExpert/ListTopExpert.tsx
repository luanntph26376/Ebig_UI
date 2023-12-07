import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import expert from '../../models/Expert';
import {
  buttonTextTypography,
  titleTypographyMobile,
} from '../Typography/typo_skin';

interface ListTopExpertProps {
  listTopExpert: Array<expert>;
  scrollEnabled: boolean;
}

const ListTopExpert: React.FC<ListTopExpertProps> = ({
  listTopExpert,
  scrollEnabled,
}) => {
  return (
    <FlatList
      scrollEnabled={scrollEnabled}
      data={listTopExpert}
      renderItem={({item}) => (
        <View
          style={{
            marginTop: 24,
            flexDirection: 'row',
            marginHorizontal: 16,
            marginBottom: item.index == listTopExpert.length - 1 ? 24 : 0,
          }}>
          <Image
            source={item.image}
            style={{width: 40, height: 40, marginRight: 12}}
          />
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text
              style={[
                titleTypographyMobile.title3,
                {color: 'rgba(0, 32, 77, 1)'},
              ]}>
              {item.fullname}
            </Text>
            <Text numberOfLines={3} ellipsizeMode="tail">
              {item.about || item.major}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(54, 106, 226, 1)',
              paddingVertical: 5,
              paddingHorizontal: 12,
              justifyContent: 'center',
              borderRadius: 24,
              height: 32,
              //   flex: 1,
            }}>
            <Text
              style={[
                buttonTextTypography.buttonText2,
                {color: 'rgba(255, 255, 255, 1)'},
              ]}>
              Theo dõi
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ListTopExpert;
