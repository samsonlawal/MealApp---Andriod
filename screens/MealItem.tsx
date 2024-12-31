import { Text, View } from "react-native";

function MealItem({ title }: any) {
  return (
    <View>
      <Text
        style={[
          {
            fontFamily: "Montserrat_400Regular",
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
}

export default MealItem;
