import CategoryGrid from "@/components/CategoryGrid";
import { CATEGORIES } from "@/constants/data";
import { FlatList } from "react-native";

function CategoriesScreen({ navigation }: { navigation: any }) {
  function renderCategoryItem(itemData: any) {
    function pressHandler() {
      navigation.navigate("MealOverview");
    }

    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
