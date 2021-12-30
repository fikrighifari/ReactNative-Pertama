import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponents from './SampleComponents';
import StylingReactNativeComponents from './StylingReactNativeComponents';
import FlexBox from './FlexBox';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponents /> 
        <StylingReactNativeComponents />
        <FlexBox/> */}
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
