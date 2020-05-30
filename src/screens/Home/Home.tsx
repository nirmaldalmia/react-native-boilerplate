import React from "react";
import { View, Text, Button } from "react-native";
import { inject, observer } from "mobx-react";
import { _storeData } from "storage";
import RNLogo from "assets/img/rn_logo.svg";

@inject("counterStore")
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    _storeData("test", "hello world");
  }

  render() {
    return (
      <View>
        <RNLogo width={200} height={200} />
        <Text>{this.props.counterStore.counter}</Text>
        <Button
          onPress={this.props.counterStore.incrementCount}
          title="Increment"
        />
        <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}
