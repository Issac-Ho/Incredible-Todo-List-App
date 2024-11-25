import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks = [], toggleComplete, removeTask  }) {
  if (!Array.isArray(tasks)) {
    return <Text>No tasks available</Text>; // Return a fallback message if tasks is not an array
  }
  
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable 
          key={index}
          onPress={() => toggleComplete(index)} 
          onLongPress={() => removeTask(index)}
        >
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
    textDecorationLine: 'line-through',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
