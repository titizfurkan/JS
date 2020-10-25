import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class EnerjiBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      joule: 0,
      cal: 0,
      kcal: 0,
      Kwh: 0,
      mj: 0,
    };

    this.jouleMethod = this.jouleMethod.bind(this);
    this.calMethod = this.calMethod.bind(this);
    this.kcalMethod = this.kcalMethod.bind(this);
    this.kwhMethod = this.kwhMethod.bind(this);
    this.mjMethod = this.mjMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  jouleMethod() {
    const number1 = parseFloat(this.state.input1);

    var joule = number1;
    joule = Number(joule.toFixed(7))

    var cal = number1 * 0.238846;
    cal = (cal.toFixed(7))

    var kcal = number1 * 0.00023885;
    kcal = (kcal.toFixed(7))

    var Kwh = number1 * 0.000000277777777777778;
    Kwh = (Kwh.toFixed(7))

    var mj = number1 * 0.000001;
    mj = Number(mj.toFixed(7))

    this.setState({
      joule: joule,
      cal: cal,
      kcal: kcal,
      Kwh: Kwh,
      mj: mj,
    });
  }

  calMethod() {
    const number1 = parseFloat(this.state.input1);

    var joule = number1 * 4.1868;
    joule = Number(joule.toFixed(7))

    var cal = number1;
    cal = Number(cal.toFixed(7))

    var kcal = number1 * 0.001;
    kcal = Number(kcal.toFixed(7))

    var Kwh = number1 * 0.000001163;
    Kwh = (Kwh.toFixed(7))

    var mj = number1 * 0.0000041868;
    mj = (mj.toFixed(7))

    this.setState({
      joule: joule,
      cal: cal,
      kcal: kcal,
      Kwh: Kwh,
      mj: mj,
    });
  }

  kcalMethod() {
    const number1 = parseFloat(this.state.input1);

    var joule = number1 * 4186.8;
    joule = Number(joule.toFixed(7))

    var cal = number1 * 1000;
    cal = Number(cal.toFixed(7))

    var kcal = number1 ;
    kcal = Number(kcal.toFixed(7))

    var Kwh = number1 * 0.001163;
    Kwh =  (Kwh.toFixed(7))

    var mj = number1 * 0.0041868;
    mj = (mj.toFixed(7))

    this.setState({
      joule: joule,
      cal: cal,
      kcal: kcal,
      Kwh: Kwh,
      mj: mj,
    });
  }

  kwhMethod() {
    const number1 = parseFloat(this.state.input1);

    var joule = number1 * 3600000;
    joule = Number(joule.toFixed(7))

    var cal = number1 * 859845.227858985;
    cal = (cal.toFixed(5))

    var kcal = number1 * 859.845227858985;
    kcal = (kcal.toFixed(5))

    var Kwh = number1;
    Kwh =  Number(Kwh.toFixed(7))

    var mj = number1 * 3.6;
    mj = Number(mj.toFixed(7))

    this.setState({
      joule: joule,
      cal: cal,
      kcal: kcal,
      Kwh: Kwh,
      mj: mj,
    });
  }

  mjMethod() {
    const number1 = parseFloat(this.state.input1);

    var joule = number1 * 1000000;
    joule = Number(joule.toFixed(7))

    var cal = number1 * 238845.896627496;
    cal = (cal.toFixed(5))

    var kcal = number1 * 238.845896627496;
    kcal = (kcal.toFixed(5))

    var Kwh = number1 * 0.277777777777778;
    Kwh =  (Kwh.toFixed(7))

    var mj = number1 ;
    mj = Number(mj.toFixed(7))

    this.setState({
      joule: joule,
      cal: cal,
      kcal: kcal,
      Kwh: Kwh,
      mj: mj,
    });
  }

  clearMethod() {
    const joule = 0;
    const cal = 0;
    const kcal = 0;
    const Kwh = 0;
    const mj = 0;

    this.setState({
      joule: joule,
      cal: cal,
      kcal: kcal,
      Kwh: Kwh,
      mj: mj,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
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
                onPress={this.jouleMethod}
                color="#9fb6cd"
                title="Joule"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.calMethod} color="#9fb6cd" title="Cal" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kcalMethod} color="#9fb6cd" title="Kcal" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kwhMethod} color="#9fb6cd" title="Kwh" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.mjMethod} color="#9fb6cd"  title="MJ" />
            </View>
          </View>
          <View style={styles.buttonClear}>
            <Button
              onPress={this.clearMethod}
              color="#cd853f"
              title="Temizle"
            />
          </View>

          <View style={{padding: 15}}></View>

          <Text style={styles.sampleText}> Joule : {this.state.joule}</Text>
          <Text style={styles.sampleText}> Cal     : {this.state.cal}</Text>
          <Text style={styles.sampleText}> Kcal   : {this.state.kcal}</Text>
          <Text style={styles.sampleText}> Kwh   : {this.state.Kwh}</Text>
          <Text style={styles.sampleText}> MJ     : {this.state.mj}</Text>
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
    width: 60,
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
    marginTop: 10,
  },
  imageStyle: {
    width: 120,
    height: 70,
    justifyContent: "center",
    alignItems: "center"
  }
});
