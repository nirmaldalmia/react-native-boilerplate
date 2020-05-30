import React from "react";
import { View, Text } from "react-native";
import { _retrieveData } from "storage";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "",
    };
  }

  async componentDidMount() {
    const value = await _retrieveData("test");
    this.setState({ test: value });
  }

  render() {
    return (
      <View>
        <Text>About</Text>
        <Text>{`String from Async storage: ${this.state.test}`}</Text>
      </View>
    );
  }
}
