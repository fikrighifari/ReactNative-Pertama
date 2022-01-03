import React from 'react';
import {ScrollView, View} from 'react-native';
import DynamicState from './pages/DynamicState';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import SampleComponents from './pages/SampleComponents';
import StylingComponents from './pages/StylingComponents';



const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <FlexBox/> */}
        {/* <SampleComponents />  */}
        {/* <Position/> */}
        {/* <StylingComponents/> */}
        {/* <PropsDinamis/> */}
        <DynamicState/>
      </ScrollView>
      
    </View>
    
  );
};

export default App;
