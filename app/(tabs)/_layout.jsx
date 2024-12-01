import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "../../constants";
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.icon}
      />
    </View>
  );
};
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  icon: {
    width: "6",
    height: "6",
  },
});
