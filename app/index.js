import React from 'react';
import { SafeAreaView } from 'react-native';
import Todoform from './todoform';
import Todolist from './todolist';
import { useState } from 'react';

const Index = () => {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      <Todolist tasks={tasks}/>
      <Todoform />
    </SafeAreaView>
  );
}

export default Index;
