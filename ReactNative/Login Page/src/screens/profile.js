import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";

export default class Profile extends Component {
  goBack = () => {
    const popAction = StackActions.pop(1);
    this.props.navigation.dispatch(popAction);
  };

  render() {
    return (
      <View>
        <SafeAreaView>
          <TouchableOpacity onPress={() => this.goBack()}>
            <Text> Geri Dön </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}
