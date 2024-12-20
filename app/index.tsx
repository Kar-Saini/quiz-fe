// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../components/screens/SplashScreen";
import LandingPage from "../components/screens/LandingPage";
import LoginScreen from "../app/(auth)/sign-in";
import SignUpScreen from "./(auth)/sign-up";
import QuizTabNavigator from "./(tabs)/home";

const Stack = createStackNavigator();

export default function App() {
  console.log("Hello from Splash")
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Landing" component={LandingPage} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="HomePage" component={QuizTabNavigator} />
      
    </Stack.Navigator>
  );
}
