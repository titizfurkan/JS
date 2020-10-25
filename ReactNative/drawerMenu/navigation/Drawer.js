import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { Feather} from "@expo/vector-icons";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";

// screens
import BirimDonusturucu from "../screens/BirimDonusturucu";
import FinansHesaplamalari from "../screens/FinansHesaplamalari";
import FizikHesaplamalari from "../screens/FizikHesaplamalari";
import InsaatMaaliyet from "../screens/InsaatMaaliyet";
import SaglikHesaplamalari from "../screens/SaglikHesaplamalari";
import VergiHesaplamalari from "../screens/VergiHesaplamalari";
import IstatistikHesaplamalari from "../screens/IstatistikHesaplamalari";
import EnerjiBirimCevirici from "../screens/EnerjiBirimCevirici";
import SicaklikBirimCevirici from "../screens/SicaklikBirimCevirici";
import ZamanBirimCevirici from "../screens/ZamanBirimCevirici";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather
                name="menu"
                size={18}
                color="black"
                style={{ paddingHorizontal: 10 }}
              />
            </Button>
          ),
        }}
      >

        <Stack.Screen name="BirimDonusturucu">
          {(props) => <BirimDonusturucu {...props} />}
        </Stack.Screen>

        <Stack.Screen name="FinansHesaplamalari">
          {(props) => <FinansHesaplamalari {...props} />}
        </Stack.Screen>

        <Stack.Screen name="FizikHesaplamalari">
          {(props) => <FizikHesaplamalari {...props} />}
        </Stack.Screen>

        <Stack.Screen name="InsaatMaaliyet">
          {(props) => <InsaatMaaliyet {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SaglikHesaplamalari">
          {(props) => <SaglikHesaplamalari {...props} />}
        </Stack.Screen>

        <Stack.Screen name="VergiHesaplamalari">
          {(props) => <VergiHesaplamalari {...props} />}
        </Stack.Screen>

        <Stack.Screen name="IstatistikHesaplamalari">
          {(props) => <IstatistikHesaplamalari {...props} />}
        </Stack.Screen>

        <Stack.Screen name="EnerjiBirimCevirici">
          {(props) => <EnerjiBirimCevirici {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SicaklikBirimCevirici">
          {(props) => <SicaklikBirimCevirici {...props} />}
        </Stack.Screen>
        
        <Stack.Screen name="ZamanBirimCevirici">
          {(props) => <ZamanBirimCevirici {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ flex: 1 }}
    >
      <Block>
        <Block flex={0.3} margin={20} bottom>
          <Text white title center bold>
            Hesaplamalar
          </Text>
          <View style={{borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 8}}>

          </View>
        </Block>
        <Block style={{width:'120%', marginTop: -15}}>
          <DrawerItem
            label="Birim Dönüştürücü"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("BirimDonusturucu")}
          />
          <DrawerItem
            label="Finans Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("FinansHesaplamalari")}
          />
          <DrawerItem
            label="Fizik Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("FizikHesaplamalari")}
          />
          <DrawerItem
            label="İnşaat Maaliyet Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("InsaatMaaliyet")}
          />
          <DrawerItem
            label="Sağlık Alanındaki Hesaplamalar"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("SaglikHesaplamalari")}
          />
          <DrawerItem
            label="Vergi Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("VergiHesaplamalari")}
          />
          <DrawerItem
            label="İstatistik Alanındaki Hesaplamaları"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("IstatistikHesaplamalari")}
          />
        </Block>
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#000000", "#474747"]}>
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: "transparent",
          activeTintColor: "white",
          inactiveTintColor: "white",
        }}
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {(props) => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: "60%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: 0 },
  avatar: {
    borderRadius: 90,
    marginBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
