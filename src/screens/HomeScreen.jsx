import React, { useState } from 'react';
import { Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
      <ToDoForm addTask={addTask} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
};

export default HomeScreen;
