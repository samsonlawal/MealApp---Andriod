import CategoriesScreen from "@/screens/categories";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewScreen from "@/screens/MealOverview";


const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
    gap: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
