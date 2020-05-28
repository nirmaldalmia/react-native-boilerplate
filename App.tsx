import React from 'react';
import {Provider} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {stores} from './src/store';
import Home from './src/screens/Home/Home';
import About from './src/screens/About/About';

declare const global: {HermesInternal: null | {}};

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

