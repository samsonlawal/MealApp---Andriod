import Category from "@/components/category";
import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor={"white"} />
      <View style={styles.Container}>
        <Category color="red" />
        <Category color="blue" />
        <Category color="green" />
        <Category color="violet" />
        <Category color="black" />

        {/* <Category />
        <Category />
        <Category />
        <Category />
        <Category /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "white",
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
