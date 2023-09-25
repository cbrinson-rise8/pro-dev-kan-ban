import { Text } from "react-native";

export default function Item({ route }) {
  const item = route.params.item;

  return <Text>{item.title}</Text>;
}
