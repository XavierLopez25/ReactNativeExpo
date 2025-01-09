import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FAB from "./components/FAB";

export default function App() {
  const [count, setCount] = useState(10);

  const fabLabel = "+1";
  const fabReset = "Reset";

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <FAB
        label={fabLabel}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        position="right"
      />

      <FAB label={fabReset} onLongPress={() => setCount(0)} position="left" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 120,
    fontWeight: "100",
  },
});
