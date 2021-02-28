import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT, WIDTH} from '../utils/styles/Dimensions';
import {COLOR} from '../utils/styles/Color';

const ExplanationText = (props) => {
  const {title, text} = props;
  return (
    <View style={styles.container}>
      <Text style={[FONT.h1, styles.font]}>{title}</Text>
      <Text style={[FONT.body3, styles.font]}>{text}</Text>
    </View>
  );
};

export default ExplanationText;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: WIDTH * 0.9,
  },
  font: {
    color: COLOR.black,
  },
});
