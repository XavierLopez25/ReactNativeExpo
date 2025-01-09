import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <Pressable
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={styles.floatingButton}
      >
        <Text style={{ color: "white", fontSize: 20 }}>+1</Text>
      </Pressable>

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
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, // only iOS
    shadowOpacity: 0.3, // only iOS
    shadowRadius: 4,
    elevation: 3,
  },
});
