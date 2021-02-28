import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {FONT, WIDTH} from '../utils/styles/Dimensions';
import {COLOR} from '../utils/styles/Color';

const InputField2 = (props) => {
  const {value, onChangeText, label, placeholder, placeholderTextColor} = props;
  const [onFocus, setOnFocus] = useState(false);
  const handleFocus = () => {
    setOnFocus(true);
  };
  const handleBlur = () => {
    setOnFocus(false);
  };
  return (
    <View style={styles.fieldContainer}>
      <TextInput
        value={value}
        label={label}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={COLOR.secondary}
        style={{
          ...FONT.placeholder,
          ...styles.textContainer,
          borderColor: onFocus ? COLOR.primary : COLOR.secondary,
        }}
      />
    </View>
  );
};

export default InputField2;

const styles = StyleSheet.create({
  fieldContainer: {
    justifyContent: 'center',
  },
  textContainer: {
    width: WIDTH * 0.9,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: WIDTH * 0.01,
    borderColor: COLOR.secondary,
  },
});
