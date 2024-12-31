import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import {
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

function CategoryGrid({
  color,
  title,
  onPress,
}: {
  color?: string;
  title: string;
  onPress: () => void;
}) {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text
            style={[styles.title, { fontFamily: "Montserrat_600SemiBold" }]}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 150,
    borderRadius: 8,
    overflow: "hidden",
  },

  button: {
    flex: 1,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
  },

  category: {
    width: "31%",
    height: 100,
    borderColor: "red",
    backgroundColor: "blue",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});
