import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fullname: {
    color: 'rgba(0, 32, 77, 0.9)',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
    lineHeight: 22,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 1000,
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(0, 32, 77, 1)',
    marginBottom: 8,
  },

  buttonMore: {
    borderWidth: 1,
    borderColor: 'rgba(54, 106, 226, 1)',
    borderRadius: 24,
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: 100,
    alignSelf: 'center',
  },

  textButtonMore: {
    color: 'rgba(54, 106, 226, 1)',
  },

  divider: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 53, 128, 0.08)',
  },
});

export default styles;
