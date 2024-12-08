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

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
        <Text style={styles.headerTitle}>Sign up</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Email Input */}
        <Text style={styles.inputLabel}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Icon name="phone-outline" size={20} color="#666666" />
          <TextInput
            style={styles.input}
            placeholder="Your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="decimal-pad"
            autoCapitalize="none"
          />
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
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>
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
    marginTop: 12,
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SignUpScreen;
