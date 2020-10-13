import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/home";
import ProfileScreen from "./src/screens/profile";
// import LoginScreen from "./src/screens/login1";
import * as firebase from "firebase";
import { Asset } from "expo-asset";
import { AppLoading } from "expo";
import Login from "./src/screens/login";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

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
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/bg.jpg")]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
