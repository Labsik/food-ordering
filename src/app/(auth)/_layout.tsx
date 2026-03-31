import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Auth" }} />
      <Stack.Screen name="sign-in" options={{ headerTitle: "Sign In" }} />
      <Stack.Screen name="sign-up" options={{ headerTitle: "Sign Up" }} />
    </Stack>
  );
}
