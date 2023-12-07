import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
    borderRadius: 100,
    color: 'white',
  },

  textInputSearch: {
    flex: 1,
    maxHeight: 32,
    padding: 0,
    marginLeft: 8,
    color: 'rgba(0, 32, 77, 0.9)',
  },

  topicFollows: {
    paddingHorizontal: 8,
    paddingTop: 24,
    paddingBottom: 32,
  },

  titleTopicFollow: {
    color: 'rgba(0, 32, 77, 1)',
    marginBottom: 24,
    marginLeft: 8,
  },

  listTopicFollows: {
    flexDirection: 'row',
  },

  itemTopicFollow: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8,
    marginRight: 8,
  },

  imageTopicFollow: {
    borderRadius: 8,
    width: '100%',
    height: 100,
  },

  nameTopicFollow: {
    color: 'rgba(0, 32, 77, 1)',
    marginTop: 12,
    marginBottom: 14,
  },

  divider: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 53, 128, 0.08)',
  },

  postTrend: {
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

  containerPostStyle2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  imagePostStyle2: {
    width: 80,
    height: 80,
  },

  productOutstanding: {
    paddingVertical: 32,
    backgroundColor: 'rgba(28, 37, 48, 1)',
  },

  courseTrend: {
    paddingVertical: 32,
    paddingHorizontal: 16,
  },

  leadingExperts: {
    paddingVertical: 32,
    backgroundColor: 'rgba(28, 37, 48, 1)',
  },
});

export default styles;
