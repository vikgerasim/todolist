import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import Todoform from "./todoform";
import Todolist from "./todolist";



const Index = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (newTask) => {
    if (newTask === "") {
      alert("Task cannot be empty!");
    } else if (!tasks.includes(newTask)) {
      setTasks([...tasks, newTask]);
    } else {
      alert("Task already exists!");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f4f8" }}>
      <View style={{ padding: 20, backgroundColor: "#008cee" }}>
        <Text
          style={{
            color: "#ffffff",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          My Todo App
        </Text>
      </View>
      <Text
        style={{ textAlign: "center", margin: 10, color: "#333" }}
      >
        {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
      </Text>
      <Todolist tasks={tasks} />
      <Todoform addTask={addTask} />
    </SafeAreaView>
  );
};

export default Index;
