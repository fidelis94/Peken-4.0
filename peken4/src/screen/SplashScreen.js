import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLOR} from '../utils/styles/Color';
import {WIDTH, HEIGHT} from '../utils/styles/Dimensions';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TabStackNavigation');
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <View>
        <LottieView
          style={styles.lottieView}
          source={require('../../assets/Splash/24972-hi.json')}
          autoPlay
          loo
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  lottieView: {
    width: '50%',
    height: HEIGHT * 0.35,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.primary,
  },
});
