import { Link, Stack } from "expo-router";
import { View } from "../../components/Themed";
import Button from "../../components/Button";
import { StyleSheet } from "react-native";

export default function AuthIndex() {
  return (
    <View style={styles.container}>
      <Link href={"/sign-in"} asChild>
        <Button text="Sign In" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
});
