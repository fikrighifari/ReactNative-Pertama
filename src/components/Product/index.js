import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import wine from '../../assets/wine.jpeg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={wine} style={styles.imageProduct} />
      <Text style={styles.productTitle}>Kukubima Energi, Oke!</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000,-</Text>
      <Text style={styles.locationText}>Jakarta Timur</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    width: 212,
    height: 261,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    padding: 12,
  },
  imageProduct: {
    width: 188,
    height: 125,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 12,
    color: '#FFC700',
    fontWeight: '600',
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
  },
  buttonWrapper: {
    backgroundColor: '#FFC700',
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
});
