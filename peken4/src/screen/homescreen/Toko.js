import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import AuthService from '../../services/AuthService';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLOR} from '../../utils/styles/Color';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';

const Item = ({nama_product, navigation, harga_product, gambar_product}) => (
  <TouchableHighlight
    style={{
      alignSelf: 'center',
      width: 320,
      height: 100,
      marginBottom: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    }}
    activeOpacity={0.9}
    onPress={navigation}>
    <View style={{flexDirection: 'row'}}>
      <ImageBackground
        style={{
          width: 100,
          height: 100,
          resizeMode: 'cover',
        }}
        imageStyle={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}}
        source={{uri: gambar_product}}
      />
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10,
          padding: 4,
          alignItems: 'center',
          height: 100,
          width: 220,
        }}>
        <Text style={{fontSize: 10, color: '#f67e7d', fontWeight: '400'}}>
          {nama_product}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#350b40',
          }}>
          Rp.{harga_product}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

const Toko = ({route, navigation}) => {
  const [products, setProducts] = useState([]);

  const {idtoko, namatoko} = route.params;

  useEffect(() => {
    getAllProduct();
    console.log(namatoko);
  }, []);

  const getAllProduct = () => {
    AuthService.getDataStore(idtoko)
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderItem = ({item}) => (
    <Item
      nama_product={item.name}
      harga_product={item.price}
      gambar_product={item.image}
      navigation={() =>
        navigation.navigate('DetailToko', {
          detailId: item.id,
          namatoko: namatoko,
        })
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View
          style={{
            backgroundColor: COLOR.primary,
            height: 220,
            width: '100%',
            flexDirection: 'column',
            alignContent: 'flex-start',
            padding: 10,
          }}>
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
              <Text style={{marginLeft: 20, fontSize: 12, color: '#aeaeae'}}>
                Cari Barang
              </Text>
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
          <View style={{paddingLeft: 20, marginTop: 10}}>
            <Text
              style={{
                fontFamily: 'Poppins-ExtraBold',
                color: 'white',
                fontSize: 25,
              }}>
              Belanja  Banyak Diskon
            </Text>
            <Text style={{color: '#aeaeae'}}>Diskon Hingga</Text>
            <Text style={{color: 'pink', fontWeight: 'bold', fontSize: 30}}>
              60%
            </Text>
          </View>
        </View>

        <View style={{padding: 12}}>
          <View>
            <Text style={{color: '#350b40', fontWeight: 'bold'}}>
              liat-liat kategori
            </Text>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <TouchableHighlight activeOpacity={0.3}>
                <View
                  style={{
                    width: 100,
                    height: 45,
                    flexDirection: 'row',
                    borderRadius: 10,
                    backgroundColor: 'white',
                    marginRight: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 1.42,

                    elevation: 2,
                  }}>
                  <MaterialCommunityIcons
                    name="check-box-outline"
                    color="#5db075"
                    size={20}
                    resizeMode="contain"
                  />
                  <Text
                    style={{marginLeft: 10, fontSize: 12, color: '#aeaeae'}}>
                    Semua
                  </Text>
                </View>
              </TouchableHighlight>
              <View
                style={{
                  width: 100,
                  height: 45,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginRight: 10,
                }}
              />
              <View
                style={{
                  width: 100,
                  height: 45,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  marginRight: 10,
                }}
              />
            </View>
          </View>
          <View>
            <Text style={{color: '#350b40', fontWeight: 'bold'}}>
              Kejar Diskon
            </Text>
            <Text style={{color: '#f67e7d', fontWeight: 'bold', fontSize: 12}}>
              Berakhir Dalam 24 jam
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingLeft: 10, marginBottom: 10}}>
          {products ? (
            <FlatList
              data={products}
              renderItem={renderItem}
              keyExtractor={(item) => item.id + ''}
            />
          ) : (
            <View style={styles.container}>
              <SkeletonContent
                containerStyle={styles.skeleton}
                isLoading={products}
                layout={[
                  {width: 150, height: 150},
                ]}></SkeletonContent>
            </View>
          )}
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#0095da',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    height: 150,
  },
  nama: {
    fontSize: 32,
  },
  alamat: {
    fontSize: 25,
  },
  gambar: {
    height: 10,
    width: 10,
  },
  skeleton: {
    borderRadius: 10,
    height: 150,
    width: 150,
    margin: 9,
  },
});

export default Toko;
