import React from 'react';
import { SafeAreaView } from 'react-native';
import Todoform from './todoform';
import Todolist from './todolist';

const Index = () => {
  return (
    <SafeAreaView>
      <Todolist />
      <Todoform />
    </SafeAreaView>
  );
}

export default Index;
