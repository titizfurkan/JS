import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";

export default class Home extends Component {
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
        </SafeAreaView>
      </View>
    );
  }
}
