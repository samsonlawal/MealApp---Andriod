import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGrid({
  color,
  title,
  onPress,
}: {
  color?: string;
  title: string;
  onPress: () => void;
}) {
  const backGroundColor = { backgroundColor: color };

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    // backgroundColor: "white",
    overflow: "hidden",
  },

  button: {
    flex: 1,
  },

  buttonPressed: {
    opacity: 0.5,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
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
