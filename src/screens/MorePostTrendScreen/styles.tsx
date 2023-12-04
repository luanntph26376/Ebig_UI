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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  body: {
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  containerPostStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  imagePostStyle2: {
    width: 80,
    height: 80,
    borderRadius: 8,
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

  datetime: {
    color: 'rgba(0, 32, 77, 0.6)',
  },

  title: {
    color: 'rgba(0, 32, 77, 1)',
    marginBottom: 8,
  },

  content: {
    color: 'rgba(0, 32, 77, 0.8)',
    marginBottom: 16,
  },

  containerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    alignItems: 'center',
  },

  containerLikeCmt: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  like: {
    marginLeft: 4,
    marginRight: 16,
    color: 'rgba(0, 32, 77, 0.6)',
  },

  comment: {marginLeft: 4, color: 'rgba(0, 32, 77, 0.6)'},

  containerSaveShare: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconSave: {marginRight: 16},

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
