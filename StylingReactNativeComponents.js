import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import wine from './wine.jpeg';

const StylingReactNativeComponents = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#rgb(231, 76, 60)',
          borderWidth: 2,
          borderColor: '#2c3e50',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          width: 212,
          height: 261,
          backgroundColor: '#F2F2F2',
          borderRadius: 8,
          padding: 12,
        }}>
        <Image
          source={wine}
          style={{
            width: 188,
            height: 125,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Kukubima Energi
        </Text>

        <Text
          style={{
            fontSize: 12,
            color: '#FFC700',
            fontWeight: '600',
          }}>
          Rp. 25.000.000,-
        </Text>

        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
          }}>
          Jakarta Selatan
        </Text>

        <View
          style={{
            backgroundColor: '#366A03',
            paddingVertical: 6,
            borderRadius: 8,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});


export default StylingReactNativeComponents;