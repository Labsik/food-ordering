import { Link, Stack, useSegments } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import { Text } from "./Themed";
import { Order } from "../types";
import { FC } from "react";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type TOrderListItemProps = {
  order: Order;
};

export const OrderListItem: FC<TOrderListItemProps> = ({ order }) => {
  return (
    <Link href={`./orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>№{order.id}</Text>
          <Text>{order.created_at}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    width: "100%",
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  status: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
