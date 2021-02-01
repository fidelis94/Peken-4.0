import {Assets} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import {Searchbar} from 'react-native-paper';
import {useEffect, useState} from 'react';

// const Market = ({navigation}) => {
//   const [notes, setNotes] = useState([]);

//   useEffect(() => {
//     getAllNotes();
//   }, []);

//   const getAllNotes = () => {
//     axios
//       .get('https://pasar-gembira4-0.herokuapp.com/toko/')
//       .then((res) => {
//         // console.log(res.data.toko);
//         setNotes(res.data.toko);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const [searchQuery, setSearchQuery] = React.useState('');

//   const onChangeSearch = (query) => setSearchQuery(query);

//   const renderItem = ({item}) => {
//     return (
//       <TouchableHighlight onPress={() => navigation.navigate('DetailToko')}>
//         <View style={styles.item}>
//           <Text style={styles.nama}>{item.nama}</Text>
//           <Text style={styles.alamat}>{item.alamat}</Text>
//           <Image source={{uri: gambar}}></Image>
//         </View>
//       </TouchableHighlight>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <View style={{marginBottom: 20, justifyContent: 'flex-start'}}>
//           <Text style={{fontFamily: 'Poppins-Bold', color: 'white'}}>
//             Peken
//           </Text>
//         </View>
//         <Searchbar
//           style={{marginBottom: 20, margin: 10}}
//           placeholder="Search"
//           onChangeText={onChangeSearch}
//           value={searchQuery}
//         />
//         <FlatList
//           data={notes}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id + ''}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

const Item = ({nama, navigasi, alamat, gambar}) => (
  <TouchableHighlight onPress={navigasi}>
    <View style={styles.item}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.alamat}>{alamat}</Text>
      <Image source={{uri: gambar}}></Image>
    </View>
  </TouchableHighlight>
);

const Market = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    axios
      .get('https://pasar-gembira4-0.herokuapp.com/toko/')
      .then((res) => {
        // console.log(res.data.toko);
        setNotes(res.data.toko);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderItem = ({item}) => (
    <Item
      nama={item.nama}
      alamat={item.alamat}
      gambar={item.gambar}
      navigasi={() => navigation.navigate('DetailToko')}
    />
  );

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{marginBottom: 20, justifyContent: 'flex-start'}}>
          <Text style={{fontFamily: 'Poppins-Bold', color: 'white'}}>
            Peken
          </Text>
        </View>
        <Searchbar
          style={{marginBottom: 20, margin: 10}}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item) => item.id + ''}
        />
      </View>
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
    marginHorizontal: 8,
    borderRadius: 10,
    height: 200,
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
});

export default Market;
