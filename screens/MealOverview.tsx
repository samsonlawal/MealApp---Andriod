import { MEALS } from "@/constants/data";
import { StyleSheet, Text, View } from "react-native";

function MealOverviewScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview</Text>
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
