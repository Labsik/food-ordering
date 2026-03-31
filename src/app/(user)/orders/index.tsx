import { FlatList, Text } from "react-native";
import { View } from "../../../components/Themed";
import orders from "../../../../assets/data/orders";
import { OrderListItem } from "../../../components/OrderListItem";

export default function OrdersScreen() {
  return (
    <FlatList
      renderItem={({ item }) => <OrderListItem order={item} />}
      data={orders}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
