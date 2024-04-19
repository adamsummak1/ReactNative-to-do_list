import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function Header({ addTask }) {
  const [text, setText] = useState("");

  function addNewTask() {
    addTask({ text: text, completed: false });
    setText("");
  }

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="text here"
        style={styles.headersInput}
        value={text}
        onChangeText={(e) => setText(e)}
      />
      <TouchableOpacity style={styles.headerButton} onPress={addNewTask}>
        <Text style={styles.headerButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ddd",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  headersInput: {
    width: 250,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "#eee",
  },
  headerButton: {
    backgroundColor: "#cc5312",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 7,
  },
  headerButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
