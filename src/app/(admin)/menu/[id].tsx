import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams, Stack, router } from "expo-router";
import products from "../../../../assets/data/products";
import { defaultPizzaImage } from "../../../components/ProductListItem";
import { PizzaSize } from "../../../types";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);

  console.log("id", id);

  if (!product)
    return (
      <Link href={"/(admin)/menu"}>
        <Pressable>
          <Text>There is no product</Text>;
        </Pressable>
      </Link>
    );

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: product.name,
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="edit"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Image
        source={{ uri: product.image ?? defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
});

export default ProductDetailsScreen;
