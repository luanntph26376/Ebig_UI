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
    paddingHorizontal: 16,
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
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: '#00204D',
    marginLeft: 12,
    flex: 1,
  },

  actionIconsAppBar: {
    flexDirection: 'row',
  },

  actionIcons: {
    marginRight: 16,
  },

  countText: {
    width: 16,
    height: 16,
    textAlign: 'center',
    position: 'absolute',
    top: -5.6,
    left: 12.4,
    backgroundColor: 'red',
    paddingVertical: 1,
    paddingHorizontal: 4,
    fontSize: 10,
    borderRadius: 100,
    color: 'white',
    lineHeight: 14,
    fontWeight: '400',
  },

  textInputSearch: {
    flex: 1,
    maxHeight: 32,
    padding: 0,
    marginLeft: 8,
  },
});

export default styles;
