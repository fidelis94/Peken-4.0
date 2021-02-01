import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground
} from 'react-native';
import { Searchbar, TouchableRipple} from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Produk',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Produk',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Produk',
  },
];

// const [produk, setProduk] = useState(DATA)

// const renderItem = ({item}) => {
//   return (
//     <View>
//       <Text>{item.title}</Text>
//     </View>
//   )
// }

// return (
//   <View>
//     <Text>Home</Text>
//     <FlatList
//       data={DATA}
//       renderItem={}
//   </View>
// )
const Item = ({title,toko}) => (
  <TouchableRipple onPress={toko} activeOpacity={5}>
      <ImageBackground  source={require('../../../assets/sayur.jpg')} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
  </TouchableRipple>
);

const DetailToko = ({navigation}) => {
  const renderItem = ({item}) => <Item title={item.title} toko={()=>navigation.navigate('TokoScreen')} />;

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style= {{marginBottom: 20, justifyContent: 'flex-start'}}>
        <Text style= {{fontFamily: "Poppins-Bold"}}>Peken</Text>
      </View>
      <Searchbar style={{marginBottom: 20}}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#0095da',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 200,
  },
  title: {
    fontSize: 32,
  },
});


export default DetailToko;
