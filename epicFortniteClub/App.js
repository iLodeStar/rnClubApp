import React, { useState, useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import Home from './components/home';
import Members from "./components/members";
import Wins from "./components/wins";
import Schedule from "./components/schedule";
import SignUp from "./components/signup";
import Login from "./components/login";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens';
import AuthCheck from "./components/auth-check";


enableScreens(false);
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Members: {
    screen: Members
  },
  Wins: {
    screen: Wins
  },
  Schedule: {
    screen: Schedule
  },
  SignUp: {
    screen: SignUp
  },
  Login: {
    screen: Login
  },
  AuthCheck: {
    screen: AuthCheck
  }
}, {
  headerMode: 'none',
  initialRouteName: "AuthCheck"
});

const AppContainer = createAppContainer(AppNavigator);

export default App = () => {


  //Hide Splash screen on app load.
  useEffect(() => {
    SplashScreen.hide();
  });



  return <AppContainer />;
}

