import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Image, Pressable, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { appColors } from '../../../styles/GlobalStyles'
import { Feather } from '@expo/vector-icons';
import { timeControl } from '../../helper/control';
import { useSelector } from 'react-redux';
import { Entypo } from '@expo/vector-icons';
import useToastNotify from '../../helper/ToastNotify';
import { AntDesign } from '@expo/vector-icons'; // İkon kullanımı için


export default function Soccer({ fixturesData }) {

  const [selectedFavorites, setSelectedFavorites] = useState([])
  const { loading } = useSelector((state) => state.user)
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("")

  const { toastInfoNotify } = useToastNotify()

  const toggleFavorite = (item) => {
    if (selectedFavorites.includes(item)) {
      setSelectedFavorites(selectedFavorites.filter(fav => fav !== item));
      toastInfoNotify('Remove From Favorites')
    }
    else {
      setSelectedFavorites([...selectedFavorites, item]);
      toastInfoNotify('Added To Favorites')
    }
  };

  const isFavorite = (item) => selectedFavorites.includes(item);

  useEffect(() => {
    const filterData = () => {
      if (search === "") {
        setFilteredData(fixturesData.response);
      } else {
        const lowercasedSearch = search.toLowerCase();
        const filtered = fixturesData.response.filter(item => {
          return (
            item.teams.home.name.toLowerCase().includes(lowercasedSearch) ||
            item.teams.away.name.toLowerCase().includes(lowercasedSearch) ||
            item.league.name.toLowerCase().includes(lowercasedSearch) ||
            item.league.country.toLowerCase().includes(lowercasedSearch)
          );
        });
        setFilteredData(filtered);
      }
    };

    filterData();
  }, [search, fixturesData.response]);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder='Search'
        inputMode='text'
        id='search'
        value={search}
        onChangeText={(text) => setSearch(text)}
      />

      {search.length > 0 && (
        <TouchableOpacity onPress={() => setSearch("")} style={styles.clearButton}>
          <AntDesign name="closecircle" size={24} color="gray" />
        </TouchableOpacity>
      )}
      </View>


      <Text style={styles.text}>Fixtures</Text>



      {
        loading ?
          (
            <View
              style={{ flex: 1, justifyContent: 'center' }}
            >
              <ActivityIndicator size="large" />
            </View>
          )
          :
          (

            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrolViewContent}>

              {
                filteredData?.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      // width: '100%',
                      // alignItems: 'center',
                      // borderWidth: 1,
                      // borderRadius: 3,
                      // borderColor: appColors.gray,
                      padding: 2,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >



                    <View style={{ width: '100%', height: 40, borderWidth: 0.4, borderColor: appColors.gray, borderRadius: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5, backgroundColor: '#B1AFFF' }}>

                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
                        <Image
                          resizeMethod='contain'
                          width={25}
                          height={25}
                          source={{ uri: item?.league?.logo }}
                        />
                        <Text style={{ color: '#fff' }}>{item?.league?.name}</Text>
                      </View>

                      <Text style={{ color: '#000' }}>{item?.league?.country}</Text>

                    </View>

                    <View
                      style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 70, borderWidth: 0.4, borderColor: appColors.gray, borderRadius: 3 }}
                    >

                      {/* SAAT */}
                      <View style={{ height: '100%', alignItems: 'center', padding: 5, backgroundColor: '#EEEEEE', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>

                        <Text>{timeControl(item?.fixture?.timestamp, item?.fixture?.timezone)}</Text>

                        <Entypo
                          name={isFavorite(item) ? "star" : "star-outlined"}
                          size={24}
                          color="black"
                          onPress={() => toggleFavorite(item)}
                        />

                      </View>

                      {/* TAKIM BİLGİSİ */}
                      <View style={{ flexDirection: 'column', alignItems: 'center', height: '100%', flex: 1, justifyContent: 'center' }}>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: 40 }}
                        >
                          <Text>{item?.teams?.home.name} - {item?.teams?.away.name}</Text>
                        </View>
                      </View>

                      {/* DETAY */}
                      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', padding: 3, backgroundColor: '#F6F5F2' }}>
                        <Pressable>
                          <Feather name="more-horizontal" size={24} color="black" />
                        </Pressable>
                      </View>

                    </View>

                  </View>
                ))
              }

            </ScrollView>


          )
      }




    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    gap: 5,
    alignItems: 'center'
  },
  text: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrolViewContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  scrollView: {
    width: '95%',
    // marginBottom: 80,
  },
  input: {
    height: 30,
    width: '90%',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap:5
  },
})