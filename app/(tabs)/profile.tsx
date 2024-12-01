import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Mock user data (replace with actual data in a real app)
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  rewards: 150,
  quizzesAttempted: 25,
  quizzesRegistered: 30,
};

export default function UserProfileScreen() {
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
        <StatusBar style="light" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
            <Text style={styles.name}>{userData.name}</Text>
            <Text style={styles.email}>{userData.email}</Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <MaterialCommunityIcons name="star" size={40} color="#FFD700" />
              <Text style={styles.statValue}>{userData.rewards}</Text>
              <Text style={styles.statLabel}>Rewards Earned</Text>
            </View>
            <View style={styles.statItem}>
              <MaterialCommunityIcons
                name="clipboard-check"
                size={40}
                color="#4CAF50"
              />
              <Text style={styles.statValue}>{userData.quizzesAttempted}</Text>
              <Text style={styles.statLabel}>Quizzes Attempted</Text>
            </View>
            <View style={styles.statItem}>
              <MaterialCommunityIcons
                name="clipboard-list"
                size={40}
                color="#2196F3"
              />
              <Text style={styles.statValue}>{userData.quizzesRegistered}</Text>
              <Text style={styles.statLabel}>Quizzes Registered</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Recent Activity</Text>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons name="trophy" size={24} color="#FFD700" />
              <Text style={styles.infoText}>Completed "Math Wizards" quiz</Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons
                name="book-open-variant"
                size={24}
                color="#4CAF50"
              />
              <Text style={styles.infoText}>
                Registered for "Science Explorer" quiz
              </Text>
            </View>
            <View style={styles.infoItem}>
              <MaterialCommunityIcons name="medal" size={24} color="#2196F3" />
              <Text style={styles.infoText}>Earned 50 reward points</Text>
            </View>
          </View>
        </ScrollView>
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
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#e0e0e0",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#e0e0e0",
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    padding: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 10,
  },
});
