import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  courseTrend: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },

  titlePostTrend: {
    color: 'rgba(0, 32, 77, 1)',
  },

  imagePostStyle1: {height: 192, width: '100%', borderRadius: 8},

  containerAuthorDatetime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 1000,
  },

  fullname: {
    color: 'rgba(0, 32, 77, 0.9)',
    marginLeft: 8,
  },

  dotSpace: {
    color: 'rgba(0, 32, 77, 0.6)',
    marginHorizontal: 4,
  },

  title: {
    color: 'rgba(0, 32, 77, 1)',
    marginBottom: 8,
  },

  content: {
    color: 'rgba(0, 32, 77, 0.8)',
    marginBottom: 16,
  },

  like: {
    marginLeft: 4,
    marginRight: 16,
    color: 'rgba(0, 32, 77, 0.6)',
  },

  comment: {marginLeft: 4, color: 'rgba(0, 32, 77, 0.6)'},

  buttonMore: {
    borderWidth: 1,
    borderColor: 'rgba(54, 106, 226, 1)',
    borderRadius: 24,
    paddingVertical: 9,
    paddingHorizontal: 16,
    alignItems: 'center',
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
