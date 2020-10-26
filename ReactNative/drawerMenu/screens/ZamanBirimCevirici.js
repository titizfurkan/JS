import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, StatusBar, Image } from "react-native";
import Constants from "expo-constants";

export default class ZamanBirimCevirici extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      saniye: 0,
      dakika: 0,
      saat: 0,
      gun: 0,
      hafta: 0,
      ay: 0,
      yil: 0,
    };

    this.saniyeMethod = this.saniyeMethod.bind(this);
    this.dakikaMethod = this.dakikaMethod.bind(this);
    this.saatMethod = this.saatMethod.bind(this);
    this.gunMethod = this.gunMethod.bind(this);
    this.haftaMethod = this.haftaMethod.bind(this);
    this.ayMethod = this.ayMethod.bind(this);
    this.yilMethod = this.yilMethod.bind(this);
    this.clearMethod = this.clearMethod.bind(this);
  }

  saniyeMethod() {
    const number1 = parseFloat(this.state.input1);

    var saniye = number1;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 * 0.01666667 ;
    dakika = (dakika.toFixed(5))

    var saat = number1 * 0.00027778;
    saat = (saat.toFixed(6))

    var gun = number1 * 0.00001157;
    gun = (gun.toFixed(6))

    var hafta = number1 * 0.00000165;
    hafta = (hafta.toFixed(6))

    var ay = number1 * 0.00000039;
    ay = (ay.toFixed(8))

    var yil = number1 * 0.00000003;
    yil = (yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
    });
  }

  dakikaMethod() {
    const number1 = parseFloat(this.state.input1);
    
    var saniye = number1 * 60;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 ;
    dakika = Number(dakika.toFixed(5))

    var saat = number1 * 0.01666667;
    saat = (saat.toFixed(6))

    var gun = number1 * 0.00069444;
    gun = (gun.toFixed(6))

    var hafta = number1 * 0.00009921;
    hafta = (hafta.toFixed(6))

    var ay = number1 * 0.00002315;
    ay = (ay.toFixed(8))

    var yil = number1 * 0.0000019;
    yil = (yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
    });
  }

  saatMethod() {
    const number1 = parseFloat(this.state.input1);

    var saniye = number1 * 3600;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 * 60;
    dakika = Number(dakika.toFixed(5))

    var saat = number1;
    saat = Number(saat.toFixed(6))

    var gun = number1 * 0.04166667;
    gun = (gun.toFixed(6))

    var hafta = number1 * 0.00595238;
    hafta = (hafta.toFixed(6))

    var ay = number1 * 0.00138889;
    ay = (ay.toFixed(8))

    var yil = number1 * 0.00011416;
    yil = (yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
    });
  }

  gunMethod() {
    const number1 = parseFloat(this.state.input1);

    var saniye = number1 * 86400;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 * 1440;
    dakika = Number(dakika.toFixed(5))

    var saat = number1 * 24;
    saat = Number(saat.toFixed(6))

    var gun = number1;
    gun = Number(gun.toFixed(6))

    var hafta = number1 * 0.14285714;
    hafta = (hafta.toFixed(6))

    var ay = number1 * 0.03333333;
    ay = (ay.toFixed(8))

    var yil = number1 * 0.00273973;
    yil = (yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
    });
  }

  haftaMethod() {
    const number1 = parseFloat(this.state.input1);

    var saniye = number1 * 604800;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 * 10080;
    dakika = Number(dakika.toFixed(5))

    var saat = number1 * 168;
    saat = Number(saat.toFixed(6))

    var gun = number1 * 7;
    gun = Number(gun.toFixed(6))

    var hafta = number1;
    hafta = Number(hafta.toFixed(6))

    var ay = number1 * 0.23310023;
    ay = (ay.toFixed(8))

    var yil = number1 * 0.01917913;
    yil = (yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
    });
  }

  ayMethod() {
    const number1 = parseFloat(this.state.input1);

    var saniye = number1 * 2592000;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 * 43200;
    dakika = Number(dakika.toFixed(5))

    var saat = number1 * 720;
    saat = Number(saat.toFixed(6))

    var gun = number1 * 30;
    gun = Number(gun.toFixed(6))

    var hafta = number1 * 4.29;
    hafta = Number(hafta.toFixed(6))

    var ay = number1;
    ay = Number(ay.toFixed(8))

    var yil = number1 * 0.08333333;
    yil = (yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
    });
  }

  yilMethod() {
    const number1 = parseFloat(this.state.input1);

    var saniye = number1 * 31536000;
    saniye = Number(saniye.toFixed(7))

    var dakika = number1 * 525600;
    dakika = Number(dakika.toFixed(7))

    var saat = number1 * 8.760;
    saat = Number(saat.toFixed(7))

    var gun = number1 * 365;
    gun = Number(gun.toFixed(7))

    var hafta = number1 * 52.14;
    hafta = Number(hafta.toFixed(7))

    var ay = number1 * 12;
    ay = Number(ay.toFixed(8))

    var yil = number1;
    yil = Number(yil.toFixed(8))

    this.setState({
        saniye: saniye,
        dakika: dakika,
        saat: saat,
        gun: gun,
        hafta: hafta,
        ay: ay,
        yil: yil,
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
          <View style={styles.header}>
          <Text style={{ fontWeight: "500", fontSize: 16, marginBottom: 20 }}>
            Zaman Birim Çevirici
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
                onPress={this.saniyeMethod}
                color="#9fb6cd"
                title="Sn"
              />
            </View>
            <View style={styles.button}>
              <Button onPress={this.dakikaMethod} color="#9fb6cd" title="D" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.saatMethod} color="#9fb6cd" title="S" />
            </View>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button onPress={this.gunMethod} color="#9fb6cd" title="G" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.haftaMethod} color="#9fb6cd"  title="H" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.ayMethod} color="#9fb6cd"  title="A" />
            </View>
            <View style={styles.button}>
              <Button onPress={this.yilMethod} color="#9fb6cd"  title="Y" />
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

          <Text style={styles.sampleText}> Sn   : {this.state.saniye}</Text>
          <Text style={styles.sampleText}> D    : {this.state.dakika}</Text>
          <Text style={styles.sampleText}> S    : {this.state.saat}</Text>
          <Text style={styles.sampleText}> G    : {this.state.gun}</Text>
          <Text style={styles.sampleText}> H    : {this.state.hafta}</Text>
          <Text style={styles.sampleText}> A    : {this.state.ay}</Text>
          <Text style={styles.sampleText}> Y    : {this.state.yil}</Text>
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
