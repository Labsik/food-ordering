import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, useLocalSearchParams, Stack, router } from "expo-router";
import products from "../../../../assets/data/products";
import { defaultPizzaImage } from "../../../components/ProductListItem";
import Button from "../../../components/Button";
import { useCart } from "../../../providers/CartProvider";
import { PizzaSize } from "../../../types";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    if (!product) return;
    addItem(product, selectedSize);
    router.push("/cart");
  };

  if (!product)
    return (
      <Link href={"/(user)/menu"}>
        <Pressable>
          <Text>There is no product</Text>;
        </Pressable>
      </Link>
    );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />

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
