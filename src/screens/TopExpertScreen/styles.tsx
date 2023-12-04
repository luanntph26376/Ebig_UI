import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  appBar: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  body: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  divider: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 53, 128, 0.08)',
  },
});

export default styles;
