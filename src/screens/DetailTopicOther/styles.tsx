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

  titleAppBar: {
    color: 'rgba(0, 32, 77, 1)',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },

  body: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  header: {
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },

  titleTopic: {
    color: 'rgba(0, 32, 77, 1)',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },

  containerInfoTopic: {
    flexDirection: 'row',
    marginTop: 16,
  },

  infoTopic: {
    color: 'rgba(0, 32, 77, 0.8)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
  },

  divider: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 53, 128, 0.08)',
  },

  topicOther: {
    paddingVertical: 32,
  },

  postTrend: {
    paddingVertical: 32,
    paddingHorizontal: 16,
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
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
    lineHeight: 22,
  },

  dotSpace: {
    color: 'rgba(0, 32, 77, 0.6)',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    marginHorizontal: 4,
  },

  datetime: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: 'rgba(0, 32, 77, 0.6)',
  },

  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(0, 32, 77, 1)',
    marginBottom: 8,
  },

  content: {
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(0, 32, 77, 0.8)',
    lineHeight: 24,
    marginBottom: 16,
  },

  containerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  containerLikeCmt: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  like: {
    marginLeft: 4,
    marginRight: 16,
  },

  comment: {marginLeft: 4},

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
    width: 100,
    alignSelf: 'center',
  },

  textButtonMore: {
    color: 'rgba(54, 106, 226, 1)',
  },

  containerPostStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  imagePostStyle2: {
    width: 80,
    height: 80,
  },

  postMostReader: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },

  topExpert: {
    paddingVertical: 32,
    backgroundColor: 'rgba(230, 234, 240, 1)',
  },

  courseTrend: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  titlePostTrend: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
    color: 'rgba(0, 32, 77, 1)',
  },
});

export default styles;
