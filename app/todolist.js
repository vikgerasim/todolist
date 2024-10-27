import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import React from "react";

const Todolist = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable>
          <View style={[styles.task, styles.incomplete]}>
            <Text key={index} style={styles.taskText}>
              {task}
            </Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  incomplete: {
    backgroundColor: "white",
  },
  taskText: {
    fontSize: 16,
  },
});

export default Todolist;
