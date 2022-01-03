import React, {Component, useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Add" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Add"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const DynamicState = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Dynamic State components</Text>
      <Counter />
      <Text style={styles.titleSection}>Functional Components (Hooks)</Text>
      <CounterClass />
      <Text style={styles.titleSection}>Class Components</Text>
    </View>
  );
};

export default DynamicState;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  titleSection: {
    marginTop: 20,
  },
});
