import React, {Component} from 'react';
import {View, Text, TextInput, Image,} from 'react-native';

const SampleComponents = () => {
  return (
    <View >
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
        uri: 'https://images.pexels.com/photos/5686480/pexels-photo-5686480.jpeg?cs=srgb&dl=pexels-olenka-sergienko-5686480.jpg&fm=jpg',
      }}
      style={{width: 240, height: 260}}
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


export default SampleComponents;