import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import QuizzesTab from "../../components/homePageComponents/QuizzesTab";
import UpcomingQuizzesTab from "../../components/homePageComponents/UpcomingQuizzes";
import RewardsTab from "../../components/homePageComponents/RewardTab";

const initialLayout = { width: Dimensions.get("window").width };

export default function QuizTabNavigator() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "quizzes", title: "Quizzes" },
    { key: "upcoming", title: "Upcoming" },
    { key: "rewards", title: "Rewards" },
  ]);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const renderScene = SceneMap({
    quizzes: QuizzesTab,
    upcoming: UpcomingQuizzesTab,
    rewards: RewardsTab,
  });

  const renderTabBar = (props) => (
    <LinearGradient
      colors={["rgba(103, 58, 183, 1)", "rgba(81, 45, 168, 1)"]}
      style={styles.tabBarContainer}
    >
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        labelStyle={styles.tabLabel}
        activeColor="#ffffff"
        inactiveColor="rgba(255, 255, 255, 0.7)"
      />
    </LinearGradient>
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient colors={["#8E2DE2", "#4A00E0"]} style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        style={styles.tabView}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    flex: 1,
  },
  tabBarContainer: {
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tabBar: {
    backgroundColor: "transparent",
  },
  indicator: {
    backgroundColor: "#ffffff",
    height: 3,
  },
  tabLabel: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 14,
    textTransform: "uppercase",
  },
});
