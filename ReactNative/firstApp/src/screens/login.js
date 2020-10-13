import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions } from "@react-navigation/native";
import * as firebase from "firebase";

const { width } = Dimensions.get("window");

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

   loginApp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log("Giriş Başarılı");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        const pushAction = StackActions.replace("Home");
        this.props.navigation.dispatch(pushAction);
      }
    });
  };

  render() {
    const { email, password } = this.state;
    //console.log(email);
    return (
      <View>
        <SafeAreaView>
          <View style={{ width: width, padding: 15, alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Giriş Yap</Text>
          </View>
          <View style={{ width: width, alignItems: "center", marginTop: 20 }}>
            <TextInput
              style={{
                width: width - 20,
                borderRadius: 12,
                padding: 15,
                backgroundColor: "lightgray",
                fontWeight: "bold",
                fontSize: 12,
              }}
              onChangeText={(emailInput) =>
                this.setState({ email: emailInput })
              }
              value={email}
              placeholder="E-mail giriniz"
              placeholderTextColor="#4d4d4d"
            />
            <TextInput
              style={{
                width: width - 20,
                borderRadius: 12,
                padding: 15,
                backgroundColor: "lightgray",
                fontWeight: "bold",
                marginTop: 10,
                fontSize: 12,
              }}
              onChangeText={(passwordInput) =>
                this.setState({ password: passwordInput })
              }
              value={password}
              placeholder="Şifre giriniz"
              placeholderTextColor="#4d4d4d"
              secureTextEntry
            />
            <TouchableOpacity onPress={() => this.loginApp()}>
              <View
                style={{
                  width: width - 20,
                  backgroundColor: "#4d4d4d",
                  borderRadius: 8,
                  marginTop: 10,
                  padding: 15,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 12, color: "#fff", fontWeight: "bold" }}
                >
                  Giriş Yap
                </Text>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                color: "#808080",
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Designed By Furkan Titiz
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
