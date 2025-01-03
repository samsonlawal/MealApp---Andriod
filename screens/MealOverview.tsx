import { MEALS } from "@/constants/data";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealOverviewScreen({ route }: { route: any }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(itemData: any) {
    return (
      <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
