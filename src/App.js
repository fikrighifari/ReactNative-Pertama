import React from 'react';
import {ScrollView, View} from 'react-native';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import SampleComponents from './pages/SampleComponents';
import StylingComponents from './pages/StylingComponents';



const App = () => {
  return (
    <View>
      <ScrollView>
        <FlexBox/>
        {/* <SampleComponents /> 
        <StylingComponents/> */}
        <Position/>
      </ScrollView>
    </View>
  );
};

export default App;
