import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';
import {set} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthService from '../../services/AuthService';
import {useSelector,useDispatch} from 'react-redux';
import {counter_minus,counter_add,add_list} from '../../redux/actions/ActionCounter'
import { COLOR } from '../../utils/styles/Color';






const DetailToko = ({route, navigation}) => {
  const [detailBarang, setDetailBarang] = useState({});
  detailBarang.counter = 1 ;
  const {detailId} = route.params;
  const dispatch =useDispatch()
  const {dashboard} = useSelector((state)=>state)

  useEffect(() => {
    getAllDetails();
  }, []);

  const getAllDetails = () => {
    AuthService.getDetailStore(detailId)
      .then((res) => {
        console.log('halo', res.data.data, 'halo');
        setDetailBarang(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View>
          <ImageBackground
            style={{
              width: '100%',
              height: 250,
              marginRight: 10,
              resizeMode: 'cover',
              opacity: 0.9,
            }}
            source={{uri: detailBarang.image}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: 60,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 160,
                }}>
                <MaterialCommunityIcons
                  name="arrow-left"
                  color="black"
                  size={25}
                  resizeMode="contain"
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <ScrollView>
          <View style={{padding: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#aeaeae'}}>
              Toko
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#350b40'}}>
              {detailBarang.name}
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ff9292'}}>
              {detailBarang.price}
            </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Color</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingHorizontal: 60,
                paddingVertical: 20,
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: 'red',
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: 'pink',
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: 'yellow',
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: 'blue',
                }}
              />
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  backgroundColor: 'red',
                }}
              />
            </View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Description</Text>
            <Text style={{opacity: 0.8, color: 'black'}}>
              {detailBarang.deskp}
            </Text>
            <TouchableHighlight
              activeOpacity={0.5}
              onPress={() => {
                dispatch({type:'ADD_LIST',payload:detailBarang})
                dispatch({type:'SUM_COUNTER'})
              }}

              style={{
                alignSelf:'center',
                marginTop: 15,
                width: 260,
                height: 40,
                backgroundColor:COLOR.primary,
                borderRadius: 10,
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
              <Text style={{fontWeight: 'bold'}}>ADD TO CART</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DetailToko;

const styles = StyleSheet.create({});
