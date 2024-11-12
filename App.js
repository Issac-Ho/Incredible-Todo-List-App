import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) { 
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View>
      <Text>To-Do List</Text>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}