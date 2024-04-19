import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Lists({ tasks, deleteTask, completeTask }) {
  return (
    <View style={styles.lists}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.list}>
          <Text
            style={[
              styles.listText,
              {
                textDecorationLine: task.completed ? "line-through" : "none",
              },
            ]}
            onPress={() => completeTask(index)}
          >
            {task.text}
          </Text>
          <TouchableOpacity
            style={styles.listDelete}
            onPress={() => deleteTask(index)}
          >
            <Text style={styles.listButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lists: {
    backgroundColor: "#f6f6f6",
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  list: {
    maxHeight: 60,
    backgroundColor: "white",
    marginTop: 20,
    width: "90%",
    borderRadius: 50,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    overflow: "scroll",
  },
  listText: {
    width: "80%",
    color: "#777",
    fontSize: 16,
  },
  listDelete: {
    width: "20%",
    backgroundColor: "#e43737",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
  },
  listButtonText: {
    color: "white",
  },
});
