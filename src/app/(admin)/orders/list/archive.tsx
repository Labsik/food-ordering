import { FlatList, Text } from "react-native";
import orders from "../../../../../assets/data/orders";
import { OrderListItem } from "../../../../components/OrderListItem";

export default function ArchiveScreen() {
  return (
    <FlatList
      renderItem={({ item }) => <OrderListItem order={item} />}
      data={orders}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
