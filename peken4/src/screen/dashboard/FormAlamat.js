import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {InputField, Button} from '../../components';
import {WIDTH, HEIGHT, FONT} from '../../utils/styles/Dimensions';
import {Picker} from '@react-native-picker/picker';
import {COLOR} from '../../utils/styles/Color';
import axios from 'axios';

const PaymentInfoRegistrationScreen = (props) => {
  const [enableShift, setEnableShift] = useState('');

  const [selectedProvinsi, setSelectedProvinsi] = useState([]);

  useEffect(() => {
    getProvinsi();
  }, []);

  const getProvinsi = () => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then((res) => {
        console.log("data Provinsi",res.data);
        setSelectedProvinsi(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [selectedKabupaten, setSelectedKabupaten] = useState([])
  useEffect(() => {
    getKabupaten();
  }, []);

  const getKabupaten = () => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32')
      .then((res) => {
        console.log(res.data);
        setSelectedKabupaten(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const [selectedKecamatan, setSelectedKecamatan] = useState([]);

  useEffect(() => {
    getKecamatan();
  }, []);

  const getKecamatan = () => {
    axios
      .get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${idkota}`)
      .then((res) => {
        console.log(res.data);
        setSelectedKecamatan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [selectedKelurahan, setSelectedKelurahan] = useState([]);

  useEffect(() => {
    getKelurahan();
  }, []);

  const getKelurahan = () => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=3214010')
      .then((res) => {
        console.log(res.data);
        setSelectedKelurahan(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [onFocus, setOnFocus] = useState(false);
  const [height, setHeight] = useState(HEIGHT * 0.055);
  const handleFocus = () => {
    setOnFocus(true);
  };
  const handleBlur = () => {
    setOnFocus(false);
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      enabled={enableShift}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <Text style={FONT.h2}>Alamat Pengririman</Text>
          <Text style={{marginTop: 10, textAlign: 'center'}}>
            *Jika alamat pengiriman dan alamat data diri sama, silahkan contreng
            pada alamat kirim di atas
          </Text>
          <View
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={props.onChangeText}
            label={props.label}
            style={{
              marginVertical: 10,
              justifyContent: 'center',
              ...styles.input,
              borderColor: onFocus ? COLOR.primary : COLOR.secondary,
              height: !props.multiline
                ? HEIGHT * 0.055
                : Platform.OS === 'ios'
                ? height + HEIGHT * 0.0275
                : height,
            }}>
            <Picker
              selectedValue={selectedProvinsi}
              style={{height: 40, width: 370}}
              onValueChange={() => {}}>
      
              {selectedProvinsi.map((item, id) => {
                return <Picker.Item label={item} value={id} key={id} />;
              })}
            </Picker>
          </View>
          <View
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={props.onChangeText}
            label={props.label}
            style={{
              justifyContent: 'center',
              ...styles.input,
              borderColor: onFocus ? COLOR.primary : COLOR.secondary,
              height: !props.multiline
                ? HEIGHT * 0.055
                : Platform.OS === 'ios'
                ? height + HEIGHT * 0.0275
                : height,
            }}>
            <Picker
              selectedValue={selectedValue}
              style={{height: 40, width: 370}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Kabupaten" value="0" />
              <Picker.Item label="Semarang" value="8000" />
              <Picker.Item label="Klaten" value="7000" />
              <Picker.Item label="Solo" value="6000" />
            </Picker>
          </View>

          <View
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={props.onChangeText}
            label={props.label}
            style={{
              marginVertical: 10,
              justifyContent: 'center',
              ...styles.input,
              borderColor: onFocus ? COLOR.primary : COLOR.secondary,
              height: !props.multiline
                ? HEIGHT * 0.055
                : Platform.OS === 'ios'
                ? height + HEIGHT * 0.0275
                : height,
            }}>
            <Picker
              selectedValue={selectedValue}
              style={{height: 40, width: 370}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Kecamatan" value="0" />
              <Picker.Item label="Gondokusuman" value="8000" />
              <Picker.Item label="Banguntapan" value="7000" />
              <Picker.Item label="Danurejan" value="6000" />
            </Picker>
          </View>
          <View
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={props.onChangeText}
            label={props.label}
            style={{
              marginBottom: 10,
              justifyContent: 'center',
              ...styles.input,
              borderColor: onFocus ? COLOR.primary : COLOR.secondary,
              height: !props.multiline
                ? HEIGHT * 0.055
                : Platform.OS === 'ios'
                ? height + HEIGHT * 0.0275
                : height,
            }}>
            <Picker
              selectedValue={selectedValue}
              style={{height: 40, width: 370}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Desa" value="0" />
              <Picker.Item label="Bimomartani" value="8000" />
              <Picker.Item label="Selomartani" value="7000" />
              <Picker.Item label="Kajoran" value="6000" />
            </Picker>
          </View>
          <InputField
            label="Rincian Alamat"
            placeholder="Ketik di sini"
            onFocus={() => setEnableShift(true)}
          />
          <View style={styles.buttonWrapper}>
            <Button text="Selanjutnya" />
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
  input: {
    width: WIDTH * 0.9,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: WIDTH * 0.02,
    backgroundColor: '#eceff1',
    paddingBottom: Platform.OS === 'android' ? HEIGHT * 0.007 : HEIGHT * 0.012,
  },
});
