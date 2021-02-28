import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {InputField, Button} from '../../components';
import {WIDTH, HEIGHT, FONT} from '../../utils/styles/Dimensions';

const PaymentInfoRegistrationScreen = ({navigation}) => {
  const onPressRegister = () => {
    navigation.navigate('Sign In');
  };
  const [enableShift, setEnableShift] = useState('');
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled={enableShift}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Text style={FONT.h2}>Informasi Pembayaran</Text>
          <InputField
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap"
            onFocus={() => setEnableShift(false)}
          />
          <InputField
            label="Email"
            placeholder="Masukkan email"
            type="number"
            onFocus={() => setEnableShift(false)}
          />
          <InputField
            label="Nomor Telpon"
            placeholder="Masukkan nomor telpon"
            onFocus={() => setEnableShift(true)}
          />
          <View style={styles.buttonWrapper}>
            <Button text="Selanjutnya" onPress={() => navigation.navigate('FormAlamat')} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PaymentInfoRegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: WIDTH * 0.05,
  },
  buttonWrapper: {marginVertical: HEIGHT * 0.02},
});
