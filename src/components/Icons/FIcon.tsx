import React from 'react';
import {SvgXml} from 'react-native-svg';

interface FIconProps {
  icon: string;
  iconColor?: string;
  size?: number;
}

const FIcon: React.FC<FIconProps> = ({icon, iconColor = '#000', size = 24}) => {
  const modifiedColor = icon.replaceAll('"black"', '"' + iconColor + '"');

  return <SvgXml xml={modifiedColor} width={size} height={size} />;
};

export default FIcon;
