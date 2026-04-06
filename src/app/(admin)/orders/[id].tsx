import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import orders from "../../../../assets/data/orders";
import { OrderListItem } from "../../../components/OrderListItem";
import { OrderItemListItem } from "../../../components/OrderItemListItem";
import { OrderStatusList } from "../../../types";
import Colors from "../../../constants/Colors";

export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();

  const order = orders.find((item) => item.id.toString() === id);

  if (!order) {
    return (
      <Link href={"./(admin)/orders"}>
        <Pressable>
          <Text>There is no order</Text>;
        </Pressable>
      </Link>
    );
  }

  return (
    <View style={styles.container}>
      <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListFooterComponent={() => {
          return (
            <>
              <Text style={{ fontWeight: "bold" }}>Status</Text>
              <View style={{ flexDirection: "row", gap: 5 }}>
                {OrderStatusList.map((status) => (
                  <Pressable
                    key={status}
                    onPress={() => console.warn("Update status")}
                    style={{
                      borderColor: Colors.light.tint,
                      borderWidth: 1,
                      padding: 10,
                      borderRadius: 5,
                      marginVertical: 10,
                      backgroundColor:
                        order.status === status
                          ? Colors.light.tint
                          : "transparent",
                    }}
                  >
                    <Text
                      style={{
                        color:
                          order.status === status ? "white" : Colors.light.tint,
                      }}
                    >
                      {status}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </>
          );
        }}
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
