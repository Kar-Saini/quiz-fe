import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Link } from "expo-router";

const { width, height } = Dimensions.get("window");

const AnimatedShape = ({ style }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 7000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 7000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0, 30, -20, 0],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0, -50, 20, 0],
  });

  const scale = animatedValue.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [1, 1.1, 0.9, 1],
  });

  return (
    <Animated.View
      style={[
        styles.shape,
        style,
        {
          transform: [{ translateX }, { translateY }, { scale }],
        },
      ]}
    />
  );
};

export default function LandingPage() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
      }}
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(103, 58, 183, 0.7)", "rgba(81, 45, 168, 0.9)"]}
        style={styles.container}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <Text style={styles.logo}>Queezy</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity style={styles.buttonGhost}>
                <Link href="/(auth)/sign-in">
                  <Text style={styles.buttonGhostText}>Sign In</Text>
                </Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonOutline}>
                <Link href="/(auth)/sign-up">
                  <Text style={styles.buttonOutlineText}>Sign Up</Text>
                </Link>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.title}>Welcome to Queezy</Text>
            <Text style={styles.description}>
              An interactive application to test knowledge and earn rewards
            </Text>
            <View style={styles.ctaButtons}>
              <TouchableOpacity style={styles.buttonPrimary}>
                <Link href="/(tabs)/home">
                  <Text style={styles.buttonPrimaryText}>Get Started</Text>
                </Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonSecondaryText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.footer}>© 2023 Queezy. All rights reserved.</Text>
        </SafeAreaView>

        <AnimatedShape
          style={[
            styles.shape1,
            { backgroundColor: "rgba(156, 39, 176, 0.3)" },
          ]}
        />
        <AnimatedShape
          style={[styles.shape2, { backgroundColor: "rgba(63, 81, 181, 0.3)" }]}
        />
        <AnimatedShape
          style={[styles.shape3, { backgroundColor: "rgba(233, 30, 99, 0.3)" }]}
        />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 24,
    color: "white",
  },
  headerButtons: {
    flexDirection: "row",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 36,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    color: "#E0E0E0",
    textAlign: "center",
    marginBottom: 30,
  },
  ctaButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginRight: 10,
  },
  buttonPrimaryText: {
    fontFamily: "Montserrat_700Bold",
    color: "#673AB7",
    fontSize: 16,
  },
  buttonSecondary: {
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonSecondaryText: {
    fontFamily: "Montserrat_700Bold",
    color: "white",
    fontSize: 16,
  },
  buttonGhost: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  buttonGhostText: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 14,
  },
  buttonOutline: {
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonOutlineText: {
    fontFamily: "Montserrat_400Regular",
    color: "white",
    fontSize: 14,
  },
  footer: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    color: "#E0E0E0",
    textAlign: "center",
    padding: 20,
  },
  shape: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    opacity: 0.7,
  },
  shape1: {
    top: height * 0.1,
    left: width * 0.1,
  },
  shape2: {
    top: height * 0.2,
    right: width * 0.1,
  },
  shape3: {
    bottom: height * 0.1,
    left: width * 0.3,
  },
});
