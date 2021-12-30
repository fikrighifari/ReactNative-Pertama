import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponents from './SampleComponents';
import StylingReactNativeComponents from './StylingReactNativeComponents';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponents /> */}
        <StylingReactNativeComponents />
      </ScrollView>
    </View>
  );
};

export default App;
