import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Mock quiz data (replace with actual data in a real app)
const quizzes = [
  {
    id: "1",
    title: "Math Wizards",
    category: "Mathematics",
    price: 5.99,
    startTime: "2023-06-15T14:00:00Z",
    duration: 60,
    questionCount: 30,
  },
  {
    id: "2",
    title: "Science Explorer",
    category: "Science",
    price: 0,
    startTime: "2023-06-16T10:00:00Z",
    duration: 45,
    questionCount: 25,
  },
  {
    id: "3",
    title: "History Buff",
    category: "History",
    price: 3.99,
    startTime: "2023-06-17T15:30:00Z",
    duration: 90,
    questionCount: 40,
  },
  {
    id: "4",
    title: "Language Master",
    category: "Languages",
    price: 7.99,
    startTime: "2023-06-18T09:00:00Z",
    duration: 75,
    questionCount: 35,
  },
  {
    id: "5",
    title: "Tech Genius",
    category: "Technology",
    price: 0,
    startTime: "2023-06-19T13:00:00Z",
    duration: 60,
    questionCount: 30,
  },
];

const QuizCard = ({ quiz }) => (
  <TouchableOpacity style={styles.quizCard}>
    <LinearGradient
      colors={["rgba(103, 58, 183, 0.8)", "rgba(81, 45, 168, 1)"]}
      style={styles.cardGradient}
    >
      <Text style={styles.quizTitle}>{quiz.title}</Text>
      <Text style={styles.quizCategory}>{quiz.category}</Text>
      <View style={styles.quizInfo}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons
            name="currency-usd"
            size={20}
            color="#FFD700"
          />
          <Text style={styles.infoText}>
            {quiz.price === 0 ? "Free" : `$${quiz.price.toFixed(2)}`}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={20}
            color="#4CAF50"
          />
          <Text style={styles.infoText}>
            {new Date(quiz.startTime).toLocaleString()}
          </Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="timer-sand" size={20} color="#2196F3" />
          <Text style={styles.infoText}>{quiz.duration} mins</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={20}
            color="#FF5722"
          />
          <Text style={styles.infoText}>{quiz.questionCount} questions</Text>
        </View>
      </View>
    </LinearGradient>
  </TouchableOpacity>
);

export default function QuizExplorerScreen() {
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
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore Quizzes</Text>
        </View>
        <FlatList
          data={quizzes}
          renderItem={({ item }) => <QuizCard quiz={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.quizList}
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
  header: {
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  quizList: {
    padding: 10,
  },
  quizCard: {
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardGradient: {
    padding: 15,
  },
  quizTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  quizCategory: {
    fontSize: 16,
    color: "#e0e0e0",
    marginBottom: 10,
  },
  quizInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginRight: 10,
  },
  infoText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
  },
});
