import {ImageProps} from 'react-native';

type course = {
  index: number;
  image: ImageProps;
  avatar: ImageProps;
  fullname: string;
  title: string;
  content: string;
  member: string;
  rate: string;
  price: number;
};

export default course;
