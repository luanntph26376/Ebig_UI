import {ImageProps} from 'react-native';

type postMostReader = {
  index: number;
  avatar: ImageProps;
  fullname: string;
  title: string;
  totalPost: number;
  totalPostSaved: number;
};

export default postMostReader;
