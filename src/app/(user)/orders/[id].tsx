import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import orders from "../../../../assets/data/orders";
import { OrderListItem } from "../../../components/OrderListItem";
import { OrderItemListItem } from "../../../components/OrderItemListItem";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  console.log("id", id);

  const currentOrder = orders.find((item) => item.id.toString() === id);

  if (!currentOrder) {
    return (
      <Link href={"./(user)/orders"}>
        <Pressable>
          <Text>There is no order</Text>;
        </Pressable>
      </Link>
    );
  }

  return (
    <View style={styles.container}>
      <OrderListItem order={currentOrder} />
      <FlatList
        data={currentOrder.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    gap: 10,
  },
});
