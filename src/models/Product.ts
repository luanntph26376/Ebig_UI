import {ImageProps} from 'react-native';

type product = {
  index: number;
  image: ImageProps;
  title: string;
  avatar: ImageProps;
  fullname: string;
  rate: string;
  priceSale?: number;
  priceOrigin: number;
  datetime?: string;
  follow?: string;
};

export default product;
