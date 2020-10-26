import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class AlanBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      cmkare: 0,
      mkare: 0,
      kmkare: 0,
      donum: 0,
    };

    this.cmkareMethod = this.cmkareMethod.bind(this);
    this.mkareMethod = this.mkareMethod.bind(this);
    this.kmkareMethod = this.kmkareMethod.bind(this);
    this.donumMethod = this.donumMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  cmkareMethod() {
    const number1 = parseFloat(this.state.input1);

    var cmkare = number1;
    cmkare = Number(cmkare.toFixed(7))

    var mkare = number1 * 0.0001;
    mkare = Number(mkare.toFixed(7))
    
    var kmkare = number1 * 0.0000000001;
    kmkare = (kmkare.toFixed(10))

    var donum = number1 * 0.0000001;
    donum = (donum.toFixed(7))

    this.setState({
        cmkare: cmkare,
        mkare: mkare,
        kmkare: kmkare,
        donum: donum,
    });
  }

  mkareMethod() {
    const number1 = parseFloat(this.state.input1);
    
    var cmkare = number1 * 10000;
    cmkare = Number(cmkare.toFixed(7))

    var mkare = number1;
    mkare = Number(mkare.toFixed(7))
    
    var kmkare = number1 * 0.000001;
    kmkare = (kmkare.toFixed(6))

    var donum = number1 * 0.001;
    donum = Number(donum.toFixed(7))

    this.setState({
        cmkare: cmkare,
        mkare: mkare,
        kmkare: kmkare,
        donum: donum,
    });
  }

  kmkareMethod() {
    const number1 = parseFloat(this.state.input1);

    var cmkare = number1 * 10000000000;
    cmkare = Number(cmkare.toFixed(7))

    var mkare = number1 * 1000000;
    mkare = Number(mkare.toFixed(7))
    
    var kmkare = number1;
    kmkare = Number(kmkare.toFixed(6))

    var donum = number1 * 1000;
    donum = Number(donum.toFixed(7))

    this.setState({
        cmkare: cmkare,
        mkare: mkare,
        kmkare: kmkare,
        donum: donum,
    });
  }

  donumMethod() {
    const number1 = parseFloat(this.state.input1);

    var cmkare = number1 * 10000000;
    cmkare = Number(cmkare.toFixed(7))

    var mkare = number1 * 1000;
    mkare = Number(mkare.toFixed(7))
    
    var kmkare = number1 * 0.001;
    kmkare = Number(kmkare.toFixed(6))

    var donum = number1;
    donum = Number(donum.toFixed(7))

    this.setState({
        cmkare: cmkare,
        mkare: mkare,
        kmkare: kmkare,
        donum: donum,
    });
  }

  clearMethod() {
    const cmkare= 0;
    const mkare= 0;
    const kmkare= 0;
    const donum= 0;

    this.setState({
        cmkare: cmkare,
        mkare: mkare,
        kmkare: kmkare,
        donum: donum,
    });
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.contentWrapper}>
          <StatusBar style="auto" />
          
          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Alan Birim Çevirici
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
                onPress={this.cmkareMethod}
                color="#9fb6cd"
                title="Cm²"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.mkareMethod} color="#9fb6cd" title="M²" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.kmkareMethod} color="#9fb6cd" title="Km²" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.donumMethod} color="#9fb6cd" title="Dönüm" />
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

          <Text style={styles.sampleText}> Cm²     : {this.state.cmkare}</Text>
          <Text style={styles.sampleText}> M²        : {this.state.mkare}</Text>
          <Text style={styles.sampleText}> Km²      : {this.state.kmkare}</Text>
          <Text style={styles.sampleText}> Dönüm : {this.state.donum}</Text>
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
