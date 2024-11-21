import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "react-native-vector-icons";

const About = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.iconButton}
        >
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>

        <Text style={styles.title}>About</Text>

        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.iconButton}
        >
          <Ionicons name="home" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <View style={styles.aboutContent}>
        <Text style={styles.aboutTextBold}>ToDo App, version 1.0</Text>
        <Text style={styles.aboutText}>Developer: Viktor Gerasimenko</Text>
        <Text style={styles.aboutText}>Date: November 19, 2024</Text>
      </View>
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
  aboutContent: {
    padding: 20,
  },
  aboutTextBold: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
});

export default About;
