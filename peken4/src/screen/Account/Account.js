import React from 'react';
import {Alert, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {WIDTH, FONT} from '../../utils/styles/Dimensions';
import {COLOR} from '../../utils/styles/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: COLOR.primary,
            height: 50,
            width: 450,
            justifyContent: 'center',
            paddingLeft: 20,
            position: 'absolute'
          }}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 25, marginLeft: 10}}>
            User Profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'stretch',
            padding: WIDTH * 0.02,
            marginHorizontal: WIDTH * 0.1,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}>
          <View style={styles.avatar}>
            <MaterialCommunityIcons
              name="account"
              size={50}
              resizeMode="contain"
            />
          </View>
          <View style={{marginLeft: WIDTH * 0.02, justifyContent: 'center', marginTop: 50}}>
            <Text style={{color: COLOR.black, ...FONT.h2}}>Pixel Pedia</Text>
            <Text style={{color: COLOR.black, ...FONT.body5}}>
              Pakualaman, Kota Yogyakarta, Daerah Istimewa Yogyakarta
            </Text>
            <Text style={{color: COLOR.black, ...FONT.body5}}>
              0812-3456-789
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLOR.primary,
            height: 50,
            width: 380,
            justifyContent: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 25,
              fontFamily: 'Poppins-SemiBold',
            }}>
            My Account
          </Text>
        </View>
        <View
          style={{
            height: 30,
            width: 380,
            justifyContent: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
              textDecorationLine: 'underline',
            }}>
            My Order
          </Text>
        </View>
        <View
          style={{
            height: 30,
            width: 380,
            justifyContent: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
              textDecorationLine: 'underline',
            }}>
            My Password
          </Text>
        </View>

        <View
          style={{
            backgroundColor: COLOR.primary,
            height: 50,
            width: 380,
            justifyContent: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 25,
              fontFamily: 'Poppins-SemiBold',
            }}>
            User Information
          </Text>
        </View>
        <View
          style={{
            height: 30,
            width: 380,
            justifyContent: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            marginTop: 30,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
              textDecorationLine: 'underline',
            }}>
            User
          </Text>
        </View>
        <View
          style={{
            height: 20,
            width: 380,
            justifyContent: 'center',
            paddingLeft: 20,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Poppins-Medium',
              textDecorationLine: 'underline',
            }}>
            App User
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLOR.primary,
            height: 50,
            width: 450,
            marginTop: 30,
          }}>
        </View>
      </SafeAreaView>
      {/* <View
        style={{
          height: WIDTH * 0.19,
          width: '100%',
        }}
      /> */}
    </>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    position: 'relative'
  },
  avatar: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    backgroundColor: COLOR.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: (WIDTH * 0.25) / 2,
    borderColor: COLOR.primary,
    borderWidth: 1.5,
    marginTop: 50
  },
});
