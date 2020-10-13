import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/home";
import ProfileScreen from "./src/screens/profile";
import LoginScreen from "./src/screens/login";
import * as firebase from "firebase";

const Stack = createStackNavigator();

var firebaseConfig = {
  apiKey: "AIzaSyDflJviQx1pVbFLg0Sf6a_WYaRRXo3eTeM",
  authDomain: "webs-d23ff.firebaseapp.com",
  databaseURL: "https://webs-d23ff.firebaseio.com",
  projectId: "webs-d23ff",
  storageBucket: "webs-d23ff.appspot.com",
  messagingSenderId: "645899160701",
  appId: "1:645899160701:web:dced095723359f2e233514",
};

firebase.initializeApp(firebaseConfig); 

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

