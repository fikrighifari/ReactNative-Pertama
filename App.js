import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
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
