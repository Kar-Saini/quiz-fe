import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Landing"); // Navigate to Landing Page
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.gradientBackground}>
        <View style={styles.gradientOverlay} />

        {/* Decorative circles */}
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />

        <SafeAreaView style={styles.content}>
          {/* App Icon */}
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/queezy-icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7755FF",
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: "#7755FF",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#",
    opacity: 0.5,
    transform: [{ skewY: "-20deg" }],
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  logo: {
    width: 160,
    height: 160,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "#FFFFFF",
    marginTop: 16,
    fontFamily: Platform.select({
      ios: "System",
      android: "Roboto",
    }),
  },
  circle: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 999,
  },
  circle1: {
    width: width * 0.8,
    height: width * 0.8,
    top: -width * 0.2,
    right: -width * 0.2,
  },
  circle2: {
    width: width * 0.4,
    height: width * 0.4,
    bottom: height * 0.2,
    left: -width * 0.2,
  },
  circle3: {
    width: width * 0.2,
    height: width * 0.2,
    top: height * 0.4,
    right: width * 0.1,
  },
});
