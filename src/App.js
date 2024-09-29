import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import CounterComponent from './components/CounterComp';

import "./style.css";

const App = () =>{
  return (
    <div className='todo-container'>
    <CounterComponent/>
      <Header />
      <TodoItem text ="Eat" />
      <TodoItem text ="Code" />
      <TodoItem text ="Sleep" />
      <TodoItem text ="Repeat" />
      <TodoItem text ="Enjoy" />
      <TodoItem text ="Life" />

      <Button/>
    </div>
  )
}

export default App;