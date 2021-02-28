import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  Alert
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector,useDispatch} from 'react-redux';
import {COLOR} from '../../utils/styles/Color';
import {WIDTH,HEIGHT} from '../../utils/styles/Dimensions';




const Item_List =({nama,gambar,price,stok,counter,id})=>{
  const dispatch = useDispatch()
  

  return(
    <View
          style={{
            flexDirection: 'row',
            padding: 10,
            marginHorizontal: 10,
            marginBottom: 20,
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
            justifyContent: 'space-around',
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri:gambar}}
          />
          <View style={{padding: 5, marginLeft: 5}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#aeaeae'}}>
              {nama}
            </Text>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: '#350b40'}}>
              Vogue
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableHighlight
                onPress={()=>{
                  dispatch({type:'COUNTER_MINUS',index:id})
                  dispatch({type:'SUM_COUNTER'})
                }}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: 'yellow',
                  borderTopStartRadius: 10,
                  borderBottomLeftRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="minus"
                  color="black"
                  size={25}
                  resizeMode="contain"
                />
              </TouchableHighlight>
              <View
                style={{
                  width: 10,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{counter}</Text>
              </View>
              <TouchableHighlight
              
              onPress={()=>{
                dispatch({type:'COUNTER_PLUS',index:id})
                dispatch({type:'SUM_COUNTER'})
              }}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: 'yellow',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="plus"
                  color="black"
                  size={25}
                  resizeMode="contain"
                />
              </TouchableHighlight>
            </View>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ff9292'}}>
              {price}
            </Text>
          </View>
          <View style={{justifyContent:'center'}}>
          <TouchableHighlight onPress={()=>{
            dispatch({type:'DELETE_LIST_INDEX',index:id})
            dispatch({type:'SUM_COUNTER'})

          }}>

          <MaterialCommunityIcons
                  name="delete"
                  color="black"
                  size={25}
                  resizeMode="contain"
                />
          </TouchableHighlight>
          </View>
        </View>
  )
}

const Dashboard = ({navigation}) => {

  const data = useSelector((state)=>state)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch({type:'SHOW_COUNTER'})
  }, [])



  const renderItem = ({item})=>{
    return(
      <Item_List
      nama={item.name}
      gambar={item.image}
      price={item.price}
      stok={item.stok}
      counter={item.counter}
      id={item.id}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontFamily: 'Poppins-SemiBold',
          }}>
          Your Bag
        </Text>
        <Text>{data.counter} item</Text>
      </View>
      <View>
        {
          data.dashboard ?
          <FlatList
          style={{height:HEIGHT*0.6,width:WIDTH}}
          key={'_'}
          data={data.dashboard}
          renderItem={renderItem}
          // ItemSeparatorComponent={()=><View style={{height:20,width:'100%',}}/>
          // }
          keyExtractor={(item) => item.id + ''}
        />
        :
        <Text>gak ada</Text>
        }
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ff9292'}}>
              ${data.total}
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate('FormScreen')
                console.log(data.dashboard)
                // navigation.navigate('FormScreen')
              }}
              activeOpacity={0.5}
              style={{
                marginVertical: 15,
                width: 260,
                height: 40,
                backgroundColor: 'yellow',
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
              <View
                style={{
                  marginVertical: 15,
                  width: 260,
                  height: 40,
                  backgroundColor: COLOR.primary,
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
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {},
  text: {
    fontSize: 42,
  },
});

export default Dashboard;
