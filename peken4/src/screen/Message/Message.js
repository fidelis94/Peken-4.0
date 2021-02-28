// Example to Send WhatsApp Message from React Native App
// https://aboutreact.com/send-whatsapp-message/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';
import {Button, InputField} from '../../components';
import ExplanationText from '../../components/ExplanationText';
import InputField2 from '../../components/InputField2';

const App = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsAppMsg, setWhatsAppMsg] = useState('');

  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('Please insert correct WhatsApp number');
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + whatsAppMsg + '&phone=62' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ExplanationText
          title={'Mau Kirim Pesan?'}
          text={'Kamu dapat mengirim pesan di sini'}
        />
        {/* <Text style={styles.titleTextsmall}>Enter WhatsApp Number</Text>
        <InputField
          value={mobileNumber}
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
          placeholder={'Enter WhatsApp Number'}
          keyboardType="numeric"
          style={styles.textInput}
        /> */}
        <InputField2
          label={'Nomor Whatsapp'}
          value={mobileNumber}
          onChangeText={(mobileNumber) => setMobileNumber(mobileNumber)}
          placeholder={'Nomor Whatsapp'}
          keyboardType="numeric"
        />
        {/* <Text style={styles.titleTextsmall}>WhatsApp Message</Text>
        <TextInput
          value={whatsAppMsg}
          onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
          placeholder={'WhatsApp Message'}
          style={styles.textInput}
        /> */}
        <InputField2
          label={'Pesan'}
          value={whatsAppMsg}
          onChangeText={(whatsAppMsg) => setWhatsAppMsg(whatsAppMsg)}
          placeholder={'Isi Pesan'}
        />
        {/* <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={initiateWhatsApp}>
          <Text style={styles.buttonTextStyle}>Send WhatsApp Message</Text>
        </TouchableOpacity> */}
        <Button onPress={initiateWhatsApp} text={'KIRIM PESAN'} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
