import { View, StyleSheet, TextInput, Button } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { useState } from "react";

const Todoform = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addTask(taskText);
          setTaskText("");
        }}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const colors = {
  background: "#f0f4f8",
  primary: "#008cee",
  textPrimary: "#333",
  buttonText: "#ffffff",
  inputBackground: "#ffffff",
  borderColor: "#ddd",
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: colors.background,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: "bold",
  },
});

export default Todoform;
