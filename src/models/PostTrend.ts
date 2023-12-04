import {ImageProps} from 'react-native';

type postTrend = {
  index: number;
  image: ImageProps;
  avatar: ImageProps;
  fullname: string;
  datetime: string;
  title: string;
  content: string;
  like: string;
  comment: string;
};

export default postTrend;
