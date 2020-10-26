import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class KuvvetBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      newton: 0,
      knewton: 0,
      dyne: 0,
      kip: 0,
    };

    this.newtonMethod = this.newtonMethod.bind(this);
    this.knewtonMethod = this.knewtonMethod.bind(this);
    this.dyneMethod = this.dyneMethod.bind(this);
    this.kipMethod = this.kipMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  newtonMethod() {
    const number1 = parseFloat(this.state.input1);

    var newton = number1;
    newton = Number(newton.toFixed(7))

    var knewton = number1 * 0.001;
    knewton = Number(knewton.toFixed(5))

    var dyne = number1 * 100000;
    dyne = Number(dyne.toFixed(6))

    var kip = number1 * 0.0002248;
    kip = (kip.toFixed(6))

    this.setState({
        newton: newton,
        knewton: knewton,
        dyne: dyne,
        kip: kip,
    });
  }

  knewtonMethod() {
    const number1 = parseFloat(this.state.input1);
    
    var newton = number1 * 1000;
    newton = Number(newton.toFixed(7))

    var knewton = number1;
    knewton = Number(knewton.toFixed(5))

    var dyne = number1 * 100000000;
    dyne = Number(dyne.toFixed(6))

    var kip = number1 * 0.2248;
    kip = Number(kip.toFixed(6))

    this.setState({
        newton: newton,
        knewton: knewton,
        dyne: dyne,
        kip: kip,
    });
  }

  dyneMethod() {
    const number1 = parseFloat(this.state.input1);

    var newton = number1 * 0.00001;
    newton = Number(newton.toFixed(7))

    var knewton = number1 * 0.00000001;
    knewton = (knewton.toFixed(8))

    var dyne = number1;
    dyne = Number(dyne.toFixed(6))

    var kip = number1 *0.000000002248;
    kip = (kip.toFixed(11))

    this.setState({
        newton: newton,
        knewton: knewton,
        dyne: dyne,
        kip: kip,
    });
  }

  kipMethod() {
    const number1 = parseFloat(this.state.input1);

    var newton = number1 * 4448;
    newton = Number(newton.toFixed(7))

    var knewton = number1 * 4.448;
    knewton = Number(knewton.toFixed(8))

    var dyne = number1 * 444822160;
    dyne = Number(dyne.toFixed(6))

    var kip = number1;
    kip = Number(kip.toFixed(11))

    this.setState({
        newton: newton,
        knewton: knewton,
        dyne: dyne,
        kip: kip,
    });
  }

  clearMethod() {
    const newton = 0;
    const knewton = 0;
    const dyne = 0;
    const kip = 0;

    this.setState({
      newton: newton,
      knewton: knewton,
      dyne: dyne,
      kip: kip,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Kuvvet Birim Çevirici
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
                onPress={this.newtonMethod}
                color="#9fb6cd"
                title="Newton"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.knewtonMethod} color="#9fb6cd" title="knewton" />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button onPress={this.kipMethod} color="#9fb6cd" title="kip" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.dyneMethod} color="#9fb6cd" title="dyne" />
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

          <Text style={styles.sampleText}> Newton   : {this.state.newton}</Text>
          <Text style={styles.sampleText}> Knewton : {this.state.knewton}</Text>
          <Text style={styles.sampleText}> Dyne       : {this.state.dyne}</Text>
          <Text style={styles.sampleText}> Kip          : {this.state.kip}</Text>
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
    width: 100,
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
