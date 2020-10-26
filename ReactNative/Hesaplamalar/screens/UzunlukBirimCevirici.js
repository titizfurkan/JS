import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class UzunlukBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      cm: 0,
      m: 0,
      km: 0,
      inc: 0,
      feet: 0,
      yard: 0,
      mil: 0,
    };

    this.cmMethod = this.cmMethod.bind(this);
    this.mMethod = this.mMethod.bind(this);
    this.kmMethod = this.kmMethod.bind(this);
    this.incMethod = this.incMethod.bind(this);
    this.feetMethod = this.feetMethod.bind(this);
    this.yardMethod = this.yardMethod.bind(this);
    this.milMethod = this.milMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  cmMethod() {
    const number1 = parseFloat(this.state.input1);

    var cm = number1;
    cm = Number(cm.toFixed(7))

    var m = number1 * 0.01 ;
    m = Number(m.toFixed(5))

    var km = number1 * 0.00001;
    km = Number(km.toFixed(5))

    var inc = number1 * 0.3937;
    inc = Number(inc.toFixed(5))

    var feet = number1 * 0.03281;
    feet = Number(feet.toFixed(5))

    var yard = number1 * 0.010936;
    yard = (yard.toFixed(6))

    var mil = number1 * 0.000006214;
    mil = (mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  mMethod() {
    const number1 = parseFloat(this.state.input1);
    
    var cm = number1 * 100;
    cm = Number(cm.toFixed(7))

    var m = number1;
    m = Number(m.toFixed(5))

    var km = number1 * 0.001;
    km = Number(km.toFixed(5))

    var inc = number1 * 39.3701;
    inc = Number(inc.toFixed(5))

    var feet = number1 * 3.2808;
    feet = Number(feet.toFixed(5))

    var yard = number1 * 1.0936;
    yard = Number(yard.toFixed(6))

    var mil = number1 * 0.00062137;
    mil = (mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  kmMethod() {
    const number1 = parseFloat(this.state.input1);

    var cm = number1 * 100000;
    cm = Number(cm.toFixed(7))

    var m = number1 * 1000;
    m = Number(m.toFixed(5))

    var km = number1;
    km = Number(km.toFixed(5))

    var inc = number1 * 39370;
    inc = Number(inc.toFixed(5))

    var feet = number1 * 3280.8;
    feet = Number(feet.toFixed(5))

    var yard = number1 * 1093.6133;
    yard = (yard.toFixed(6))

    var mil = number1 * 0.6214;
    mil = (mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  incMethod() {
    const number1 = parseFloat(this.state.input1);

    var cm = number1 * 2.54;
    cm = Number(cm.toFixed(7))

    var m = number1 * 0.0254;
    m = Number(m.toFixed(5))

    var km = number1 * 0.0000254;
    km = (km.toFixed(5))

    var inc = number1;
    inc = Number(inc.toFixed(5))

    var feet = number1 * 0.08333;
    feet = Number(feet.toFixed(5))

    var yard = number1 * 0.02778;
    yard = (yard.toFixed(6))

    var mil = number1 * 0.000015783;
    mil = (mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  feetMethod() {
    const number1 = parseFloat(this.state.input1);

    var cm = number1 * 30.48;
    cm = Number(cm.toFixed(7))

    var m = number1 * 0.3048;
    m = Number(m.toFixed(5))

    var km = number1 * 0.0003048;
    km = (km.toFixed(5))

    var inc = number1 * 12;
    inc = Number(inc.toFixed(5))

    var feet = number1;
    feet = Number(feet.toFixed(5))

    var yard = number1 * 0.333333;
    yard = (yard.toFixed(6))

    var mil = number1 * 0.00018939;
    mil = (mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  yardMethod() {
    const number1 = parseFloat(this.state.input1);

    var cm = number1 * 91.44;
    cm = Number(cm.toFixed(7))

    var m = number1 * 0.9144;
    m = Number(m.toFixed(5))

    var km = number1 * 0.0009144;
    km = (km.toFixed(6))

    var inc = number1 * 36;
    inc = Number(inc.toFixed(5))

    var feet = number1 * 3;
    feet = Number(feet.toFixed(5))

    var yard = number1;
    yard = Number(yard.toFixed(6))

    var mil = number1 * 0.0005682;
    mil = (mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  milMethod() {
    const number1 = parseFloat(this.state.input1);

    var cm = number1 * 160934.4;
    cm = Number(cm.toFixed(7))

    var m = number1 * 1609.35;
    m = Number(m.toFixed(5))

    var km = number1 * 1.6093;
    km = Number(km.toFixed(6))

    var inc = number1 * 63360;
    inc = Number(inc.toFixed(5))

    var feet = number1 * 5280;
    feet = Number(feet.toFixed(5))

    var yard = number1 * 1760;
    yard = Number(yard.toFixed(6))

    var mil = number1;
    mil = Number(mil.toFixed(8))

    this.setState({
        cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  clearMethod() {
    const cm= 0;
    const m= 0;
    const km= 0;
    const inc= 0;
    const feet= 0;
    const yard= 0;
    const mil= 0;

    this.setState({
       cm: cm,
        m: m,
        km: km,
        inc: inc,
        feet: feet,
        yard: yard,
        mil: mil,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          
          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Uzunluk Birim Çevirici
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
                onPress={this.cmMethod}
                color="#9fb6cd"
                title="Cm"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.mMethod} color="#9fb6cd" title="M" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kmMethod} color="#9fb6cd" title="Km" />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button onPress={this.incMethod} color="#9fb6cd" title="Inc" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.feetMethod} color="#9fb6cd"  title="Feet" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.yardMethod} color="#9fb6cd"  title="Yard" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.milMethod} color="#9fb6cd"  title="Mil" />
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

          <Text style={styles.sampleText}> Cm    : {this.state.cm}</Text>
          <Text style={styles.sampleText}> M      : {this.state.m}</Text>
          <Text style={styles.sampleText}> Km    : {this.state.km}</Text>
          <Text style={styles.sampleText}> Inc    : {this.state.inc}</Text>
          <Text style={styles.sampleText}> Feet  : {this.state.feet}</Text>
          <Text style={styles.sampleText}> Yard  : {this.state.yard}</Text>
          <Text style={styles.sampleText}> Mil    : {this.state.mil}</Text>
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
    marginTop: 5,
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
