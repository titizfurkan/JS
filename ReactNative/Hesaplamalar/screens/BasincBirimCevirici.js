import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class BasincBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      atm: 0,
      bar: 0,
      pascal: 0,
    };

    this.atmMethod = this.atmMethod.bind(this);
    this.barMethod = this.barMethod.bind(this);
    this.pascalMethod = this.pascalMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  atmMethod() {
    const number1 = parseFloat(this.state.input1);

    var atm = number1;
    atm = Number(atm.toFixed(7))

    var bar = number1 * 1.0133;
    bar = Number(bar.toFixed(7))

    var pascal = number1 * 101325.3;
    pascal = Number(pascal.toFixed(7))

    this.setState({
        atm: atm,
        bar: bar,
        pascal: pascal,
    });
  }

  barMethod() {
    const number1 = parseFloat(this.state.input1);

    var atm = number1 * 0.9869;
    atm = Number(atm.toFixed(7))

    var bar = number1;
    bar = Number(bar.toFixed(7))

    var pascal = number1 * 100000;
    pascal = Number(pascal.toFixed(7))

    this.setState({
        atm: atm,
        bar: bar,
        pascal: pascal,
    });
  }

  pascalMethod() {
    const number1 = parseFloat(this.state.input1);

    var atm = number1 * 0.0000098692;
    atm = (atm.toFixed(8))

    var bar = number1 * 0.00001;
    bar = Number(bar.toFixed(7))

    var pascal = number1;
    pascal = Number(pascal.toFixed(7))

    this.setState({
        atm: atm,
        bar: bar,
        pascal: pascal,
    });
  }

  clearMethod() {
    const atm = 0;
    const bar = 0;
    const pascal = 0;

    this.setState({
        atm: atm,
        bar: bar,
        pascal: pascal,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />

          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Basınç Birim Çevirici
          </Text>
        </View>

          <TextInput
            style={styles.input}
            placeholder="Çevirilecek Sayı"
            onChangeText={(text) => {
              this.setState({
                input1: text,
              });
            }}
            value={this.state.input1}
          />

          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button
                onPress={this.atmMethod}
                color="#9fb6cd"
                title="atm"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.barMethod} color="#9fb6cd" title="Bar" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.pascalMethod} color="#9fb6cd" title="Pascal" />
            </View>
          </View>
          <View style={styles.buttonClear}>
            <Button
              onPress={this.clearMethod}
              color="#cd853f"
              title="Temizle"
            />
          </View>

          <View style={{padding: 10}}></View>

          <Text style={styles.sampleText}> Atm      : {this.state.atm}</Text>
          <Text style={styles.sampleText}> Bar        : {this.state.bar}</Text>
          <Text style={styles.sampleText}> Pascal  : {this.state.pascal}</Text>
        </View>
        </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
    position: 'absolute', 
    left: 0, 
    right: 0, 
    top: 0
  },
  contentWrapper: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 70,
    height: "auto",
    margin: 5,
    borderRadius: 15,
  },
  buttonClear: {
    width: "auto",
    height: "auto",
    margin: 5,
  },
  input: {
    height: 40,
    fontSize: 20,
    marginBottom: 15,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  sampleText: {
    height: 45,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    color: "white",
    backgroundColor: "#4f4f4f",
    fontSize: 24,
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
