import { View, Text, Platform, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";
import { router } from "expo-router";

export default function CartScreen() {
  const { items, total } = useCart();
  console.log("rrr", items.length);

  useEffect(() => {
    if (!items) return router.back();
  }, [items]);

  return (
    <View style={{ marginHorizontal: 10 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />
      <Text style={styles.total}>Total: ${total.toFixed(2)} </Text>
      <Button disabled={!items} text="Checkout" />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
  },
});
