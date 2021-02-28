import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
  TextInput,
} from 'react-native';
import {useEffect, useState} from 'react';
import AuthService from '../../services/AuthService';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR} from '../../utils/styles/Color';

const Item = ({nama, navigasi, alamat, gambar}) => (
  <TouchableHighlight
    activeOpacity={0.6}
    onPress={navigasi}
    style={{
      borderRadius: 5,
      height: 220,
      width: 200,
      margin: 9,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    }}>
    <View>
      <ImageBackground
        resizeMode="cover"
        source={{uri: gambar}}
        imageStyle={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
        style={styles.item}
      />
      <View
        style={{
          
          padding: 4,
          alignItems: 'center',
          height: 60,
          width: 200,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 12, color: '#f67e7d', fontWeight: '400'}}>
          {nama}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: '#350b40',
          }}>
          {alamat}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

const Market = ({navigation}) => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    AuthService.getListMarket()
      .then((res) => {
        // console.log(res.data.toko)
        setNotes(res.data.toko);
      })
      .then((err) => {
        console.log(err);
      });
  };

  const renderItem = ({item}) => (
    <Item
      nama={item.nama}
      alamat={item.alamat}
      gambar={item.gambar}
      navigasi={() => navigation.navigate('TokoScreen', {idtoko: item.id})}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: '100%', height: '30%'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 30,
            marginVertical: 20,
            marginLeft: 10,
            fontWeight: 'bold',
            alignSelf:'center'
          }}>
          Peken 4.0
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
                style={{
                  width: 200,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginRight: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 5,
                }}>
                <MaterialCommunityIcons
                  name="shopping-search"
                  color="#5db075"
                  size={20}
                  resizeMode="contain"
                />
                <TextInput 
                placeholder={'Cari Barang'}
                style={{marginLeft: 20, fontSize: 12, color: '#aeaeae'}}>
                </TextInput>
              </View>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  color="#5db075"
                  size={20}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="cart"
                  color="#5db075"
                  size={20}
                  resizeMode="contain"
                />
              </View>
            </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 30,}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            shoes
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#aeaeae',
            }}>
            sweater
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#aeaeae',
            }}>
            tank top
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 600,
          shadowColor: '#000',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
          backgroundColor: 'white',
        }}>
        {notes ? (
          <FlatList
            key={'_'}
            data={notes}
            renderItem={renderItem}
            // ItemSeparatorComponent={()=><View style={{height:20,width:'100%',}}/>
            // }

            horizontal
            keyExtractor={(item) => item.id + ''}
          />
        ) : (
          <View >
            <SkeletonContent
              containerStyle={styles.skeleton}
              isLoading={notes}
              layout={[
                {key: 'notes', width: 150, height: 150},
              ]}></SkeletonContent>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  item: {
    backgroundColor: '#DEE1DD',
    borderRadius: 2,
    height: 150,
    width: 200,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  nama: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  alamat: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    textAlign: 'center',
  },
  skeleton: {
    borderRadius: 10,
    height: 150,
    width: 150,
    margin: 9,
  },
});

export default Market;
