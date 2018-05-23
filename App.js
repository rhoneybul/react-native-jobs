
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { 
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {

  render() {

    const ReviewNavigator = createStackNavigator({
      review: { screen: ReviewScreen },
      settings: { screen: SettingsScreen },
    })

    const MainNavigator = createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: { screen: ReviewNavigator },
    })

    const AppNavigator = createBottomTabNavigator({
          welcome: { screen: WelcomeScreen },
          auth: { screen: AuthScreen },
          main: {
            screen: MainNavigator
          }
    });

    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});