import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  //primitive tipe data
  const name = 'Fikri Akbar Ghifari';
  let age = '25';
  const isMan = true;

  //complex tipe data
  const pets = {
    nama: 'Milo',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    orangTua: {
      jantan: 'Maman',
      betina: 'Eneng',
    },
  }; //object

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia Anda ${age}`);
  }; //function
  sapaOrang('Fikri', 26);

  const namaOrang = ['Fikri', 'Akbar', 'Ghifari', 'Rizka','Ari','Santi']; //object Array

  // if (hewanPeliharaan.nama === 'Miaw') {
  //     console.log('Hello, Miaw');
  // } else {
  //     console.log('ini peliharaan siapa?');
  // }

  const sapaHewan = objectHewan => {
    //     let hasilSapa = '';
    //     if (pets.nama === 'Milo') {
    //       hasilSapa = 'Hellow, Milo🐱';
    //     } else {
    //       hasilSapa = 'ini peliharaan siapa?';
    //     }
    //     return hasilSapa;
    return pets.nama === 'Milo' ? 'Hellow, Milo🐱' : 'ini peliharaan siapa?';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Basic Javascript in React Native</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>{sapaHewan(pets)}</Text>
      <Text>============</Text>
      {namaOrang.map(orang => (
          <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
