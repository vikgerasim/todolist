import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/pexels-breakingpic.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.card}>
          <Text style={styles.text}>Welcome!</Text>
          <Link href="/todoapp" style={styles.button}>
            <Text style={styles.buttonText}>Go to App</Text>
          </Link>
          <Link href="/about" style={styles.button}>
            <Text style={styles.buttonText}>About</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    borderRadius: 15,
    width: '60%',
    padding: 20,
    alignItems: 'center',
    elevation: 5, 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
