import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLOR} from '../../src/utils/styles/Color';
import {WIDTH, HEIGHT, SIZE, FONT} from '../utils/styles/Dimensions';

const Button = (props) => {
  const [isSecondButton, setSecondButton] = useState(props.isSecondButton);
  const [isDangerButton, setDangerButton] = useState(props.isDangerButton);
  return (
    <TouchableOpacity
      isSecondButton={props.isSecondButton}
      isDangerButton={props.isDangerButton}
      style={[
        styles.button,
        props.style,
        {
          borderColor: isDangerButton ? COLOR.red : COLOR.primary,
          backgroundColor: isDangerButton
            ? COLOR.red
            : isSecondButton
            ? COLOR.transparent
            : COLOR.primary,
        },
      ]}
      onPress={props.onPress}>
      <Text
        style={{
          ...styles.font,
          ...props.style,
          ...FONT.button1,
          color: isSecondButton ? COLOR.primary : COLOR.white,
        }}>
        {props.text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: WIDTH * 0.9,
    height: HEIGHT * 0.055,
    borderRadius: WIDTH * 0.01,
    marginVertical: HEIGHT * 0.01,
    backgroundColor: COLOR.primary,
    borderWidth: 1.5,
  },
  font: {
    fontSize: SIZE.m,
    color: COLOR.white,
  },
});
