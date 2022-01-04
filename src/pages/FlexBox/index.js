import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{backgroundColor: '#2980b9', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#e74c3c', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#2c3e50', width: 50, height: 50}}></View>
          <View
            style={{backgroundColor: '#16a085', width: 50, height: 50}}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Home</Text>
          <Text>Search</Text>
          <Text>Your Library</Text>
          <Text>Liked Song</Text>
          <Text>Profile</Text>
        </View>
        <View style={{flexDirection: 'row',marginTop:20}}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/10601299/pexels-photo-10601299.jpeg?cs=srgb&dl=pexels-daria-kruchkova-10601299.jpg&fm=jpg',
            }}
            style={{width: 80, height: 80, borderRadius: 40, marginRight:14}}></Image>
          <View style={{justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Deerfox</Text>
            <Text>Fikri Akbar Ghifari</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
