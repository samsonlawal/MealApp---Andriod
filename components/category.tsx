import { StyleSheet, Text, View } from "react-native";

function Category({ color }: { color: string }) {
  const backGroundColor = { backgroundColor: color };

  return (
    <View style={[styles.category, backGroundColor]}>
      <Text>Category</Text>
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
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
