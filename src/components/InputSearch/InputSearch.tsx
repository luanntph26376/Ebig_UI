import {View, TextInput, Text} from 'react-native';
import {IconClear, IconSearch} from '../../assets/icons';
import styles from './styles';
import {bodyTextTypography} from '../Typography/typo_skin';
import React, {useState} from 'react';

interface InputSearchProps {
  onTextChange?: (text: string) => void;
  autoFocus?: boolean;
  editable?: boolean;
  value?: string;
}

const InputSearch: React.FC<InputSearchProps> = ({
  onTextChange,
  autoFocus,
  editable,
  value,
}) => {
  const [text, setText] = useState('');
  const [showClearButton, setShowClearButton] = useState(false);

  const handleChangeText = (inputText: string) => {
    setText(inputText);
    setShowClearButton(inputText.length > 0);
    if (onTextChange) {
      onTextChange(inputText);
    }
  };

  const handleClearText = () => {
    setText('');
    setShowClearButton(false);
    if (onTextChange) {
      onTextChange('');
    }
  };

  const styleInputSearch = {
    ...styles.bottomAppBar,
    borderColor: text.length > 0 ? 'rgba(54, 106, 226, 1)' : 'transparent',
    borderWidth: 1,
  };

  return (
    <View style={styleInputSearch}>
      <IconSearch />
      <TextInput
        value={text || value}
        placeholder="Tìm kiếm"
        style={[bodyTextTypography.bodyText2, styles.textInputSearch]}
        placeholderTextColor={'rgba(0, 32, 77, 0.4)'}
        cursorColor={'rgba(0, 32, 77, 0.8)'}
        onChangeText={handleChangeText}
        autoFocus={autoFocus}
        editable={editable}
        selectTextOnFocus={editable}
      />
      {showClearButton && <IconClear onPress={handleClearText} />}
    </View>
  );
};

export default InputSearch;
