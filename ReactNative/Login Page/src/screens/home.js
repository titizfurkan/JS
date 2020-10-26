import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import * as firebase from "firebase";

export default class Home extends Component {

  state = {
    text: ''
  }

  componentDidMount = () => {
    firebase.database.ref("text").on("value", (snap) => {
      this.setState({ text: snap.val() });
    });
  };

  goToProfile = () => {
    const pushAction = StackActions.push("Profile");
    this.props.navigation.dispatch(pushAction);
  };

  render() {
    return (
      <View>
        <SafeAreaView>
          <TouchableOpacity onPress={() => this.goToProfile()}>
            <Text> Profile Git </Text>
          </TouchableOpacity>
          <Text> {this.state.text} </Text>
        </SafeAreaView>
      </View>
    );
  }
}
