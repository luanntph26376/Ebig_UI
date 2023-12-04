import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {
  IconCart,
  IconMenu,
  IconMessage,
  IconNotification,
  IconSearch,
} from '../../assets/icons';
import styles from './styles';

<View style={styles.appBar}>
  <View style={styles.topAppBar}>
    <IconMenu />
    <Text style={styles.titleAppBar}>Khám phá</Text>
    <View style={styles.actionIconsAppBar}>
      <View>
        <IconCart style={styles.actionIcons} />
        <Text style={styles.countText}>9</Text>
      </View>
      <View>
        <IconNotification style={styles.actionIcons} />
        <Text style={styles.countText}>9</Text>
      </View>
      <View>
        <IconMessage />
        <Text style={styles.countText}>9</Text>
      </View>
    </View>
  </View>
  <View style={styles.bottomAppBar}>
    <IconSearch />
    <TextInput placeholder="Tìm kiếm" style={styles.textInputSearch} />
  </View>
</View>;
