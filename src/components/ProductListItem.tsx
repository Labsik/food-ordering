import { Text, Image, Pressable, StyleSheet } from "react-native";
import Colors from "@/src/constants/Colors";
import { FC } from "react";
import { Product } from "../types";
import { Link, useSegments } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type TProductListItemProps = {
  product: Product;
};

const ProductListItem: FC<TProductListItemProps> = ({ product }) => {
  const segments = useSegments();

  console.log("sss", segments, segments[0]);

  return (
    <Link href={`./menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    borderRadius: 10,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 10,
    textAlign: "center",
  },
  price: {
    color: Colors.light.tint,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
