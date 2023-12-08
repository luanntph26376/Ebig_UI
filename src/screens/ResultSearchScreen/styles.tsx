import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    zIndex: 1,
  },

  topAppBar: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },

  bottomAppBar: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: 'rgba(242, 245, 248, 1)',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },

  titleAppBar: {
    color: 'rgba(0, 32, 77, 1)',
    flex: 1,
    textAlign: 'center',
  },

  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
    borderBottomColor: 'rgba(0, 53, 128, 0.08)',
    borderBottomWidth: 1,
  },
  label: {
    color: 'rgba(0, 32, 77, 0.6)  ',
    textTransform: 'none',
  },
  indicator: {
    backgroundColor: 'rgba(54, 106, 226, 1)',
  },
  tabStyle: {
    width: 'auto',
  },
});

export default styles;
