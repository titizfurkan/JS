import React from 'react';
import { Block, Text } from 'expo-ui-kit';
import { StyleSheet, View, TouchableOpacity} from 'react-native';

export default ({ navigation ,style }) => {
  return (
    <Block
      color="#41D5FB"
      style={{
        ...style,
      }}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Kutu 1</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Kutu 2</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Kutu 3</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Kutu 4</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Kutu 5</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Kutu 6</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('FinansHesaplamalari')}>
          <View style={styles.inner}>
            <Text>Kutu 9</Text>
          </View>
        </TouchableOpacity>

      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "10%",
    top: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  container: {
    width: "100%",
    height: "90%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: "33%",
    height: "30%",
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  }
});
