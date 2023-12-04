import {ImageProps} from 'react-native';

type expert = {
  index: number;
  image: ImageProps;
  fullname: string;
  major?: string;
  followers?: number;
  about?: string;
};

export default expert;
