import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Todoform from "./todoform";
import Todolist from "./todolist";
import { useRouter } from "expo-router"; 
import { Ionicons } from "react-native-vector-icons"; 

const Todoapp = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const router = useRouter(); 

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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>

        <Text style={styles.title}>My ToDo App</Text>

        <TouchableOpacity onPress={() => router.push("/")} style={styles.iconButton}>
          <Ionicons name="home" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.taskCount}>
        {tasks.length} {tasks.length === 1 ? "Task" : "Tasks"}
      </Text>

      <Todolist tasks={tasks} />
      <Todoform addTask={addTask} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between", 
    backgroundColor: "#008cee",
    padding: 20,
  },
  iconButton: {
    paddingHorizontal: 10, 
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center", 
    flex: 1, 
  },
  taskCount: {
    textAlign: "center",
    margin: 10,
    color: "#333",
  },
});

export default Todoapp;
