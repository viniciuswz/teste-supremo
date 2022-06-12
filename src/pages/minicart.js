import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Minicart() {
 const [items,setItems] = useState(null)

 useEffect(()=>{
    const getData = async ()=>{
        const response = await AsyncStorage.getItem("@minicarti");
        if(response !== null){
            setItems(JSON.parse(response))
        }
    }
    getData()
 },[])

 useEffect(()=>{
   console.log('items=>', items)
 },[items])

 return (
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >

    { items === null 
    ? (<View><Text>Carrinho vazio</Text></View>) 
    : (
        <View>
            <Image
                source={require("../assets/house5.jpg")}
                style={{width: 90, height: 90, borderRadius: 8}}
            />
            <View>
                <Text>{items.name}</Text>
                <Text>{items.price}</Text>
            </View>
        </View>
    ) }
    


   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});