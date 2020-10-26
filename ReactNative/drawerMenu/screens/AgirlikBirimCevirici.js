import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class AgirlikBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      gr: 0,
      kg: 0,
      lb: 0,
      ons: 0,
      ton: 0,
    };

    this.grMethod = this.grMethod.bind(this);
    this.kgMethod = this.kgMethod.bind(this);
    this.lbMethod = this.lbMethod.bind(this);
    this.onsMethod = this.onsMethod.bind(this);
    this.tonMethod = this.tonMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  grMethod() {
    const number1 = parseFloat(this.state.input1);

    var gr = number1;
    gr = Number(gr.toFixed(7))

    var kg = number1 * 0.001;
    kg = Number(kg.toFixed(5))

    var lb = number1 * 0.0022;
    lb = Number(lb.toFixed(6))

    var ons = number1 * 0.0353;
    ons = Number(ons.toFixed(6))

    var ton = number1 * 0.000001;
    ton = (ton.toFixed(6))

    this.setState({
        gr: gr,
        kg: kg,
        lb: lb,
        ons: ons,
        ton: ton,
    });
  }

  kgMethod() {
    const number1 = parseFloat(this.state.input1);
    
    var gr = number1 * 1000;
    gr = Number(gr.toFixed(7))

    var kg = number1;
    kg = Number(kg.toFixed(5))

    var lb = number1 * 2.2046;
    lb = Number(lb.toFixed(6))

    var ons = number1 * 35.274;
    ons = Number(ons.toFixed(6))

    var ton = number1 * 0.001;
    ton = Number(ton.toFixed(6))

    this.setState({
        gr: gr,
        kg: kg,
        lb: lb,
        ons: ons,
        ton: ton,
    });
  }

  lbMethod() {
    const number1 = parseFloat(this.state.input1);

    var gr = number1 * 453.592;
    gr = Number(gr.toFixed(7))

    var kg = number1 * 0.4536;
    kg = Number(kg.toFixed(5))

    var lb = number1;
    lb = Number(lb.toFixed(6))

    var ons = number1 * 16;
    ons = Number(ons.toFixed(6))

    var ton = number1 * 0.000453592;
    ton = (ton.toFixed(8))

    this.setState({
        gr: gr,
        kg: kg,
        lb: lb,
        ons: ons,
        ton: ton,
    });
  }

  onsMethod() {
    const number1 = parseFloat(this.state.input1);

    var gr = number1 * 28.3495;
    gr = Number(gr.toFixed(7))

    var kg = number1 * 0.0283;
    kg = Number(kg.toFixed(5))

    var lb = number1 * 0.0625;
    lb = Number(lb.toFixed(6))

    var ons = number1;
    ons = Number(ons.toFixed(6))

    var ton = number1 * 0.0000283495;
    ton = (ton.toFixed(8))

    this.setState({
        gr: gr,
        kg: kg,
        lb: lb,
        ons: ons,
        ton: ton,
    });
  }

  tonMethod() {
    const number1 = parseFloat(this.state.input1);

    var gr = number1 * 1000000;
    gr = Number(gr.toFixed(7))

    var kg = number1 * 1000;
    kg = Number(kg.toFixed(5))

    var lb = number1 * 2204.623;
    lb = Number(lb.toFixed(6))

    var ons = number1 * 35273.96;
    ons = Number(ons.toFixed(6))

    var ton = number1;
    ton = Number(ton.toFixed(8))

    this.setState({
        gr: gr,
        kg: kg,
        lb: lb,
        ons: ons,
        ton: ton,
    });
  }

  clearMethod() {
    const gr = 0;
    const kg = 0;
    const lb = 0;
    const ons = 0;
    const ton = 0;

    this.setState({
        gr: gr,
        kg: kg,
        lb: lb,
        ons: ons,
        ton: ton,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Ağırlık Birim Çevirici
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
                onPress={this.grMethod}
                color="#9fb6cd"
                title="gr"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kgMethod} color="#9fb6cd" title="kg" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.lbMethod} color="#9fb6cd" title="lb" />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button onPress={this.onsMethod} color="#9fb6cd" title="ons" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.tonMethod} color="#9fb6cd"  title="ton" />
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

          <Text style={styles.sampleText}> Gr     : {this.state.gr}</Text>
          <Text style={styles.sampleText}> Kg     : {this.state.kg}</Text>
          <Text style={styles.sampleText}> Lb     : {this.state.lb}</Text>
          <Text style={styles.sampleText}> Ons   : {this.state.ons}</Text>
          <Text style={styles.sampleText}> Ton   : {this.state.ton}</Text>
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
