import React from "react";
import { Block, Text } from "expo-ui-kit";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default ({ navigation, style }) => {
  return (
    <LinearGradient style={{ flex: 1 }} colors={["#ffffff", "#000000"]}>
      <Block
        style={{
          ...style,
        }}
      >
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Birim Dönüştürücü
          </Text>
        </View>

        <View style={styles.container}>
        
        <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FinansHesaplamalari")}
          >
            <View style={styles.inner}>
            <Text>Açı Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FinansHesaplamalari")}
          >
            <View style={styles.inner}>
              <Text>Ağırlık Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FinansHesaplamalari")}
          >
            <View style={styles.inner}>
            <Text>Basınç Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FinansHesaplamalari")}
          >
            <View style={styles.inner}>
            <Text>Hız Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FinansHesaplamalari")}
          >
            <View style={styles.inner}>
            <Text>Alan Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("FinansHesaplamalari")}
          >
            <View style={styles.inner}>
            <Text>Uzunluk Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("ZamanBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Zaman Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("SicaklikBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Sıcaklık Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("EnerjiBirimCevirici")}
          >
            <View style={styles.inner}>
            <Text>Enerji Birim</Text>
              <Text>Çevirici</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Block>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  container: {
    width: "100%",
    height: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "33%",
    height: "33%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
});
