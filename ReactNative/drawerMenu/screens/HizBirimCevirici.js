import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class HizBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      msn: 0,
      ftsn: 0,
      kmh: 0,
      mph: 0,
      knot: 0,
    };

    this.msnMethod = this.msnMethod.bind(this);
    this.ftsnMethod = this.ftsnMethod.bind(this);
    this.kmhMethod = this.kmhMethod.bind(this);
    this.mphMethod = this.mphMethod.bind(this);
    this.knotMethod = this.knotMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  msnMethod() {
    const number1 = parseFloat(this.state.input1);

    var msn = number1;
    msn = Number(msn.toFixed(7))

    var ftsn = number1 * 3.281;
    ftsn = Number(ftsn.toFixed(7))

    var kmh = number1 * 3.6;
    kmh = Number(kmh.toFixed(7))

    var mph = number1 * 2.237;
    mph = Number(mph.toFixed(7))

    var knot = number1 * 1.944;
    knot = Number(knot.toFixed(7))

    this.setState({
        msn: msn,
        ftsn: ftsn,
        kmh: kmh,
        mph: mph,
        knot: knot,
    });
  }

  ftsnMethod() {
    const number1 = parseFloat(this.state.input1);

    var msn = number1 * 0.3048;
    msn = Number(msn.toFixed(7))

    var ftsn = number1;
    ftsn = Number(ftsn.toFixed(7))

    var kmh = number1 * 1.0973;
    kmh = Number(kmh.toFixed(7))

    var mph = number1 * 0.6818;
    mph = Number(mph.toFixed(7))

    var knot = number1 * 0.5925;
    knot = Number(knot.toFixed(7))

    this.setState({
        msn: msn,
        ftsn: ftsn,
        kmh: kmh,
        mph: mph,
        knot: knot,
    });
  }

  kmhMethod() {
    const number1 = parseFloat(this.state.input1);

    var msn = number1 * 0.2778;
    msn = Number(msn.toFixed(7))

    var ftsn = number1 * 0.9113;
    ftsn = Number(ftsn.toFixed(7))

    var kmh = number1;
    kmh = Number(kmh.toFixed(7))

    var mph = number1 * 0.6214;
    mph = Number(mph.toFixed(7))

    var knot = number1 * 0.54;
    knot = Number(knot.toFixed(7))

    this.setState({
        msn: msn,
        ftsn: ftsn,
        kmh: kmh,
        mph: mph,
        knot: knot,
    });
  }

  mphMethod() {
    const number1 = parseFloat(this.state.input1);

    var msn = number1 * 0.447;
    msn = Number(msn.toFixed(7))

    var ftsn = number1 * 1.4667;
    ftsn = Number(ftsn.toFixed(7))

    var kmh = number1 * 1.6093;
    kmh = Number(kmh.toFixed(7))

    var mph = number1;
    mph = Number(mph.toFixed(7))

    var knot = number1 * 0.869;
    knot = Number(knot.toFixed(7))

    this.setState({
        msn: msn,
        ftsn: ftsn,
        kmh: kmh,
        mph: mph,
        knot: knot,
    });
  }

  knotMethod() {
    const number1 = parseFloat(this.state.input1);

    var msn = number1 * 0.5144;
    msn = Number(msn.toFixed(7))

    var ftsn = number1 * 1.6878;
    ftsn = Number(ftsn.toFixed(7))

    var kmh = number1 * 1.8519;
    kmh = Number(kmh.toFixed(7))

    var mph = number1 * 1.1507;
    mph = Number(mph.toFixed(7))

    var knot = number1;
    knot = Number(knot.toFixed(7))

    this.setState({
        msn: msn,
        ftsn: ftsn,
        kmh: kmh,
        mph: mph,
        knot: knot,
    });
  }

  clearMethod() {
    const msn = 0;
    const ftsn = 0;
    const kmh = 0;
    const mph = 0;
    const knot = 0;

    this.setState({
        msn: msn,
        ftsn: ftsn,
        kmh: kmh,
        mph: mph,
        knot: knot,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />

          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Hız Birim Çevirici
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
                onPress={this.msnMethod}
                color="#9fb6cd"
                title="m/sn"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.ftsnMethod} color="#9fb6cd" title="ft/sn" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kmhMethod} color="#9fb6cd" title="kmh" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.mphMethod} color="#9fb6cd" title="mph" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.knotMethod} color="#9fb6cd"  title="knot" />
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

          <Text style={styles.sampleText}> M/sn  : {this.state.msn}</Text>
          <Text style={styles.sampleText}> Ft/sn  : {this.state.ftsn}</Text>
          <Text style={styles.sampleText}> Kmh    : {this.state.kmh}</Text>
          <Text style={styles.sampleText}> Mph    : {this.state.mph}</Text>
          <Text style={styles.sampleText}> Knot    : {this.state.knot}</Text>
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
  },
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
