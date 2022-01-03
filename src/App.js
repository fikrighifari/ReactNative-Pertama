import React from 'react';
import {ScrollView, View} from 'react-native';
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
        <PropsDinamis/>
      </ScrollView>
      
    </View>
    
  );
};

export default App;
