import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./component/Header";
import Lists from "./component/Lists";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);

  function addTask(newTask) {
    console.log(newTask);
    setTask((tasks) => [...tasks, newTask]);
  }

  function deleteTask(id) {
    setTask((tasks) => tasks.filter((task, index) => index !== id));
  }

  function completeTask(id) {
    setTask((tasks) =>
      tasks.map((task, index) => {
        if (index === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header addTask={addTask} />
        <Lists
          tasks={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efe4e4",
    alignItems: "center",
  },
});
