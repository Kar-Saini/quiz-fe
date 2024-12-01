import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const upcomingQuizzes = [
  { id: "1", title: "Astronomy Challenge", date: "2023-06-20", time: "14:00" },
  { id: "2", title: "Literature Legends", date: "2023-06-22", time: "16:30" },
  { id: "3", title: "Coding Competition", date: "2023-06-25", time: "10:00" },
  { id: "4", title: "Geography Genius", date: "2023-06-28", time: "15:00" },
  { id: "5", title: "Music Maestro", date: "2023-07-01", time: "18:00" },
];

const UpcomingQuizItem = ({ title, date, time }) => (
  <LinearGradient
    colors={["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.05)"]}
    style={styles.quizItem}
  >
    <Text style={styles.quizTitle}>{title}</Text>
    <Text style={styles.quizDateTime}>
      {date} at {time}
    </Text>
  </LinearGradient>
);

export default function UpcomingQuizzesTab() {
  return (
    <View style={styles.container}>
      <FlatList
        data={upcomingQuizzes}
        renderItem={({ item }) => (
          <UpcomingQuizItem
            title={item.title}
            date={item.date}
            time={item.time}
          />
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
  quizDateTime: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
});
