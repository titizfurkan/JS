import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class SicaklikBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      celcius: 0,
      fahrenheit: 0,
      rankine: 0,
      reamur: 0,
      kelvin: 0,
    };

    this.celciusMethod = this.celciusMethod.bind(this);
    this.fahrenheitMethod = this.fahrenheitMethod.bind(this);
    this.rankineMethod = this.rankineMethod.bind(this);
    this.reamurMethod = this.reamurMethod.bind(this);
    this.kelvinMethod = this.kelvinMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  celciusMethod() {
    const number1 = parseFloat(this.state.input1);

    var celcius = number1;
    celcius = Number(celcius.toFixed(7))

    var fahrenheit = (celcius * 9/5) + 32 ;
    fahrenheit = Number(fahrenheit.toFixed(7))

    var rankine = (celcius * 1.8) + 491.67;
    rankine = Number(rankine.toFixed(7))

    var reamur = celcius * 0.8;
    reamur = Number(reamur.toFixed(7))

    var kelvin = celcius + 273.15;
    kelvin = Number(kelvin.toFixed(7))

    this.setState({
        celcius: celcius,
        fahrenheit: fahrenheit,
        rankine: rankine,
        reamur: reamur,
        kelvin: kelvin,
    });
  }

  fahrenheitMethod() {
    const number1 = parseFloat(this.state.input1);
    
    var fahrenheit = number1 ;
    fahrenheit = Number(fahrenheit.toFixed(7))

    var celcius = (fahrenheit - 32) / 1.8;
    celcius = Number(celcius.toFixed(5))

    var rankine = (fahrenheit - 32) + 491.67;
    rankine = Number(rankine.toFixed(5))

    var reamur = (fahrenheit - 32) / 1.8 * 0.8;
    reamur = Number(reamur.toFixed(5))

    var kelvin = ((fahrenheit - 32) / 1.8) + 273.15;
    kelvin = Number(kelvin.toFixed(5))

    this.setState({
        celcius: celcius,
        fahrenheit: fahrenheit,
        rankine: rankine,
        reamur: reamur,
        kelvin: kelvin,
    });
  }

  rankineMethod() {
    const number1 = parseFloat(this.state.input1);

    var rankine = number1;
    rankine = Number(rankine.toFixed(5))

    var celcius = (((rankine - 491.67) * 5) / 9);
    celcius = Number(celcius.toFixed(5))

    var fahrenheit = ((((rankine - 491.67) * 5) / 9) * 9/5) + 32 ;
    fahrenheit = Number(fahrenheit.toFixed(7))

    var reamur = (((rankine - 491.67) * 5) / 9) * 0.8;
    reamur = Number(reamur.toFixed(5))

    var kelvin = (((rankine - 491.67) * 5) / 9) + 273.15;
    kelvin = Number(kelvin.toFixed(5))

    this.setState({
        celcius: celcius,
        fahrenheit: fahrenheit,
        rankine: rankine,
        reamur: reamur,
        kelvin: kelvin,
    });
  }

  reamurMethod() {
    const number1 = parseFloat(this.state.input1);

    var reamur = number1;
    reamur = Number(reamur.toFixed(5))

    var celcius = (reamur * 1.25);
    celcius = Number(celcius.toFixed(5))

    var fahrenheit = ((reamur * 1.25) * 9/5) + 32 ;
    fahrenheit = Number(fahrenheit.toFixed(7))

    var rankine = ((reamur * 1.25) * 1.8) + 491.67 ;
    rankine = Number(rankine.toFixed(5))

    var kelvin = (reamur * 1.25) + 273.15;
    kelvin = Number(kelvin.toFixed(5))

    this.setState({
        celcius: celcius,
        fahrenheit: fahrenheit,
        rankine: rankine,
        reamur: reamur,
        kelvin: kelvin,
    });
  }

  kelvinMethod() {
    const number1 = parseFloat(this.state.input1);

    var kelvin = number1;
    kelvin = Number(kelvin.toFixed(5))
    
    var celcius = (kelvin - 273.15);
    celcius = Number(celcius.toFixed(5))

    var fahrenheit = ((kelvin - 273.15) * 9/5) + 32 ;
    fahrenheit = Number(fahrenheit.toFixed(7))

    var rankine = ((kelvin - 273.15) * 1.8) + 491.67 ;
    rankine = Number(rankine.toFixed(5))

    var reamur = (kelvin - 273.15) * 0.8;
    reamur = Number(reamur.toFixed(5))

    this.setState({
        celcius: celcius,
        fahrenheit: fahrenheit,
        rankine: rankine,
        reamur: reamur,
        kelvin: kelvin,
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
                onPress={this.celciusMethod}
                color="#9fb6cd"
                title="°C"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.fahrenheitMethod} color="#9fb6cd" title="°F" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.rankineMethod} color="#9fb6cd" title="ºR" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.reamurMethod} color="#9fb6cd" title="°Re" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kelvinMethod} color="#9fb6cd"  title="K" />
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

          <Text style={styles.sampleText}> °C   : {this.state.celcius}</Text>
          <Text style={styles.sampleText}> °F   : {this.state.fahrenheit}</Text>
          <Text style={styles.sampleText}> ºR   : {this.state.rankine}</Text>
          <Text style={styles.sampleText}> °Re : {this.state.reamur}</Text>
          <Text style={styles.sampleText}> °K   : {this.state.kelvin}</Text>
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
