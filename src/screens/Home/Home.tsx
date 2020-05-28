import React from 'react';
import {View, Text, Button} from 'react-native';
import {inject, observer} from 'mobx-react';

@inject('counterStore')
@observer
export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.counterStore.counter}</Text>
        <Button
          onPress={this.props.counterStore.incrementCount}
          title="Increment"
        />
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}
