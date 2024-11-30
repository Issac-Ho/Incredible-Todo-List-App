import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import tasksData from '../data/tasks.json';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks); 
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('./data/tasks.json');
        const data = await response.json();
        console.log('Fetched tasks:', data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };
    fetchTasks();
  }, []);
  
  const handleAddTask = () => {
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  const handleGenerateRandomTask = () => {
    if (tasks.length > 0) {
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      console.log('Random task selected:', randomTask); 
      setTaskText(randomTask);
    } else {
      console.log('No tasks available to select.');
    }
  };
  

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Generate Random Task" onPress={handleGenerateRandomTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default ToDoForm;
