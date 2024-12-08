import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.navigate("Landing");
          }}
        >
          <Icon name="arrow-left" size={24} color="#1F1F1F" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Login</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Social Login Buttons */}
        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={20} color="#1F1F1F" />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebookButton}>
          <Icon name="facebook" size={20} color="#FFFFFF" />
          <Text style={styles.facebookButtonText}>Login with Facebook</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <Text style={styles.dividerText}>OR</Text>
        </View>

        {/* Email Input */}
        <Text style={styles.inputLabel}>Email Address</Text>
        <View style={styles.inputContainer}>
          <Icon name="email-outline" size={20} color="#666666" />
          <TextInput
            style={styles.input}
            placeholder="Your email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <Icon name="lock-outline" size={20} color="#666666" />
          <TextInput
            style={styles.input}
            placeholder="Your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#666666"
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Terms */}
        <Text style={styles.termsText}>
          By continuing, you agree to the{" "}
          <Text style={styles.termsLink}>Terms of Services</Text>
          {" & "}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 10 : StatusBar.currentHeight!,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 12,
    color: "#1F1F1F",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  googleButtonText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "#1F1F1F",
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1877F2",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  facebookButtonText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  dividerContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  dividerText: {
    color: "#666666",
    fontSize: 14,
  },
  inputLabel: {
    fontSize: 14,
    color: "#1F1F1F",
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    marginLeft: 12,
    fontSize: 16,
    color: "#1F1F1F",
  },
  loginButton: {
    backgroundColor: "#7755FF",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPasswordButton: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: "#7755FF",
    fontSize: 14,
    fontWeight: "500",
  },
  termsText: {
    textAlign: "center",
    color: "#666666",
    fontSize: 14,
    lineHeight: 20,
  },
  termsLink: {
    color: "#1F1F1F",
    fontWeight: "500",
  },
});

export default LoginScreen;
