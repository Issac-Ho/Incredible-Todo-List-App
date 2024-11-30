import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Incredible ToDo List App</Text>
        <Text style={styles.subtitle}>Created by Issac Ho</Text>
        <Text style={styles.date}>{new Date().toDateString()}</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
});

export default AboutScreen;
