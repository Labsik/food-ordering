import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import Colors from "../../../constants/Colors";

export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/(admin)/menu/create" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square"
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
      <Stack.Screen
        name="[id]"
        options={{
          headerRight: () => (
            <Link href="/cart" asChild>
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
      <Stack.Screen name="create" />
    </Stack>
  );
}
