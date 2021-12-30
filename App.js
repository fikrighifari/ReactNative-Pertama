import React from 'react';
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
      style={{width: 200, height: 500}}
    />
  );
};

export default App;
