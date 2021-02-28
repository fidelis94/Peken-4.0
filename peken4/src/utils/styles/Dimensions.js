import {Dimensions, Platform, PixelRatio} from 'react-native';
import {COLOR} from './Color';
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

const scale = WIDTH / 375;

export function scaleFontSize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const SIZE = {
  xxl: scaleFontSize(34),
  xl: scaleFontSize(28),
  l: scaleFontSize(20),
  m: scaleFontSize(17),
  s: scaleFontSize(15),
  xs: scaleFontSize(13),
  xxs: scaleFontSize(12),
};

export const FONT = {
  h0: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZE.xxl,
    lineHeight: SIZE.xxl + 5,
  },
  h1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZE.xl,
    lineHeight: SIZE.xl + 6,
  },
  h2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZE.l,
    lineHeight: SIZE.l + 8,
  },
  h3: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZE.m,
    lineHeight: SIZE.m + 6,
  },
  h4: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZE.s,
    lineHeight: SIZE.s + 8,
  },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZE.xl,
    lineHeight: SIZE.xl + 6,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZE.l,
    lineHeight: SIZE.l + 8,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZE.m,
    lineHeight: SIZE.m + 6,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZE.s,
    lineHeight: SIZE.s + 8,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZE.xs,
    lineHeight: SIZE.xs + 8,
  },
  placeholder: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZE.m,
  },
  button1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZE.m,
  },
  inputFieldText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZE.m,
    color: COLOR.black,
  },
};
