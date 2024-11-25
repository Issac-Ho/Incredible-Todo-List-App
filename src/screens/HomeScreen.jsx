import React from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <ToDoList />
      <ToDoForm />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
};

export default HomeScreen;
