import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/order.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.textNotif}>66</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda!</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    alignItems: 'center'
  },
  cartWrapper: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 93 / 2,
    width: 93,
    height: 93,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: '900',
    marginTop: 8,
  },
  textNotif: {
    fontSize:12,
    color: 'white',
    backgroundColor: '#FFC700',
    padding:5,
    borderRadius:25,
    width:24,
    height:24,
    position: 'absolute',
    top:0,
    right:5,
  }
});
