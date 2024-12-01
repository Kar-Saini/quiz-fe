import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const quizzes = [
  { id: "1", title: "Math Wizards", category: "Mathematics" },
  { id: "2", title: "Science Explorer", category: "Science" },
  { id: "3", title: "History Buff", category: "History" },
  { id: "4", title: "Language Master", category: "Languages" },
  { id: "5", title: "Tech Genius", category: "Technology" },
];

const QuizItem = ({ title, category }) => (
  <LinearGradient
    colors={["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.05)"]}
    style={styles.quizItem}
  >
    <Text style={styles.quizTitle}>{title}</Text>
    <Text style={styles.quizCategory}>{category}</Text>
  </LinearGradient>
);

export default function QuizzesTab() {
  return (
    <View style={styles.container}>
      <FlatList
        data={quizzes}
        renderItem={({ item }) => (
          <QuizItem title={item.title} category={item.category} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  quizItem: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  quizTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 4,
  },
  quizCategory: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
