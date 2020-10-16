import React from "react";
import { Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { Feather, AntDesign } from "@expo/vector-icons";
import { Block, Button, Text } from "expo-ui-kit";
import { LinearGradient } from "expo-linear-gradient";

// screens
import Dashboard from "../screens/Dashboard";
import Messages from "../screens/Messages";
import Contact from "../screens/Contact";

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
        <Stack.Screen name="Home">
          {(props) => <Dashboard {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Messages">
          {(props) => <Messages {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Contact">
          {(props) => <Contact {...props} />}
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
        <Block flex={0.4} margin={20} bottom>
          <Image
            source={{
              uri: "https://i.hizliresim.com/lFfZ3Z.png",
              height: 60,
              width: 60,
              scale: 0.5,
            }}
            resizeMode="center"
            style={styles.avatar}
          />
          <Text white title>
            Uygulama İsmi
          </Text>
          <Text white size={9}>
            uygulama@uygulama.com
          </Text>
        </Block>
        <Block>
          <DrawerItem
            label="Anasayfa"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("Home")}
            icon={() => <AntDesign name="home" color="white" size={16} />}
          />
          <DrawerItem
            label="Mesajlar"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("Messages")}
            icon={() => <AntDesign name="message1" color="white" size={16} />}
          />
          <DrawerItem
            label="İletişim"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("Contact")}
            icon={() => <AntDesign name="phone" color="white" size={16} />}
          />
        </Block>
      </Block>

      <Block flex={false}>
        <DrawerItem
          label="Çıkış Yap"
          labelStyle={{ color: "white" }}
          icon={() => <AntDesign name="logout" color="white" size={16} />}
          onPress={() => alert("Çıkış yapmak istediğine emin misin ?")}
        />
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
    <LinearGradient style={{ flex: 1 }} colors={["#ffffff", "#950a24"]}>
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
  drawerStyles: { flex: 1, width: "50%", backgroundColor: "transparent" },
  drawerItem: { alignItems: "flex-start", marginVertical: 0 },
  drawerLabel: { color: "white", marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
