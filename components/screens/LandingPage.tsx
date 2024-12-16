import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const LoginSignup: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />
      <View style={[styles.circle, styles.circle3]} />

      {/* Content */}
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/queezy-icon.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Illustrations */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require("../../assets/character-walking.png")}
            style={[styles.illustration, styles.illustrationRight]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Login or Sign Up</Text>
          <Text style={styles.cardDescription}>
            Login or create an account to take quiz, take part in challenge, and
            more.
          </Text>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={() => {
              navigation.navigate("Signup");
            }}
          >
            <Text style={styles.createAccountText}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7755FF",
  },
  content: {
    flex: 1,
    justifyContent:"space-between",
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight,
  },
  circle: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 9999,
  },
  circle1: {
    width: width * 0.4,
    height: width * 0.4,
    top: -width * 0.1,
    right: -width * 0.1,
  },
  circle2: {
    width: width * 0.2,
    height: width * 0.2,
    top: height * 0.15,
    left: width * 0.1,
  },
  circle3: {
    width: width * 0.3,
    height: width * 0.3,
    bottom: height * 0.3,
    right: -width * 0.15,
  },
  logoSection: {
    alignItems: "center",
    marginTop: 30,
  },
  logoContainer: {
    width: 120,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
  logo: {
    width: 120,
    height: 140,
  },
  illustrationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: height * 0.01,
  },
  illustration: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.9,
    height: width * 0.9,
  },
  illustrationRight: {
    marginLeft: width * 0.01,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    margin: width * 0.03,
    paddingBottom: Platform.OS === "ios" ? 40 : 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1F1F1F",
    marginBottom: 8,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 15,
    color: "#666666",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },
  loginButton: {
    backgroundColor: "#7755FF",
    borderRadius: 12,
    paddingVertical: 16,
    marginBottom: 16,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  createAccountButton: {
    marginBottom: 16,
  },
  createAccountText: {
    color: "#7755FF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  laterButton: {
    marginTop: 8,
  },
  laterText: {
    color: "#666666",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginSignup;
