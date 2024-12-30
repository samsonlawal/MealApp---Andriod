import CategoryGrid from "@/components/CategoryGrid";
import { CATEGORIES } from "@/constants/data";
import { FlatList } from "react-native";

function renderCategoryItem(itemData: any) {
  return (
    <CategoryGrid title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
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
