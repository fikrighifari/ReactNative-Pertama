import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import wine from './wine.jpeg';

const App = () => {
  return <StylingReactNativeComponents />;
};

const StylingReactNativeComponents = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      {/* <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#rgb(231, 76, 60)',
          borderWidth: 2,
          borderColor: '#2c3e50',
          marginTop: 20,
          marginLeft: 20,
        }}
      /> */}
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
            paddingVertical:6,
            borderRadius: 8,
            marginTop:20,
          }}>
          <Text style={{
            fontSize:14,
            fontWeight:'600',
            color: 'white',
            textAlign: 'center',
          }}>BELI</Text>
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

const SampleComponents = () => {
  return (
    <View>
      <View style={{width: 50, height: 50, backgroundColor: '#3498db'}} />
      <Text>Fikri</Text>
      <Text>Akbar</Text>
      <LastName />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <Profile />
    </View>
  );
};

const LastName = () => {
  return <Text>Ghifari</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{
        uri: 'https://images.pexels.com/photos/2456348/pexels-photo-2456348.jpeg?cs=srgb&dl=pexels-dids-2456348.jpg&fm=jpg',
      }}
      style={{width: 100, height: 100}}
    />
  );
};

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/6006352/pexels-photo-6006352.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-6006352.jpg&fm=jpg',
          }}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{fontSize: 24, color: 'green'}}>Vivi Novika</Text>
      </View>
    );
  }
}

export default App;
