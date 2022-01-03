import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight:20}}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 70, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Dinamic Components using Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            title="Fantasia"
            image="https://cdna.artstation.com/p/assets/images/images/012/029/716/large/efflam-mercier-fdn-shd-161124-spiritsexploration-shepperd-b-v007-em.jpg?1532641524"
          />
          <Story
            title="North"
            image="https://cdna.artstation.com/p/assets/images/images/012/029/082/large/efflam-mercier-fdn-shd-161124-spiritsexploration-ogremacrochanges-noarmor-v008-em-copy.jpg?1532638957"
          />
          <Story
            title="Dersik"
            image="https://cdna.artstation.com/p/assets/images/images/001/182/654/large/efflam-mercier-render-girl-magician-v007-copy.jpg?1443926948"
          />
          <Story
            title="Nightwish"
            image="https://cdna.artstation.com/p/assets/images/images/031/217/020/large/zoma-phamoz-siren-v05s.jpg?1602957958"
          />
          <Story
            title="Two Steps from Hell"
            image="https://cdna.artstation.com/p/assets/images/images/040/130/746/large/efflam-mercier-seeds-of-resistance-min.jpg?1627957982"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
