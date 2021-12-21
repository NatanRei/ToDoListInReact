import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddTask from './components/addTask';
import Tasks from './components/tasks'
import Header from './components/header';
import TaskDetails  from './components/taskDetails';

import './App.css';


const App = () => {
const [ tasks, setTasks ] = useState([]);

useEffect(() => {
  const fechTasks = async () => {
    const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
    setTasks(data);
  }
  fechTasks();
  
}, [])

const handleTaskClick = (taskId) => {
  const newTasks = tasks.map((task) => {
    if( task.id === taskId) return { ...task, completed: !task.completed}

    return task;
  })
  setTasks(newTasks);
};

 const handleTaskEdition = (taskTitle) => {
  const newTask = [ ...tasks, {
    id: uuidv4(),
    title: taskTitle,
    completed: false
  }];
  setTasks(newTask);
  
 };

 const handleTaskDeletion = (taskId) => {
  const newTasks = tasks.filter(task => taskId !== task.id);
  setTasks(newTasks);
 };



  return (
    <Router>
    <div className="container">
      <Header/>

      <Route
        path="/"
        exact
        render={() => (
          <>
          
            <AddTask handleTaskEdition={handleTaskEdition} />
            <Tasks 
              tasks={tasks} 
              handleTaskClick={handleTaskClick} 
              handleTaskDeletion={handleTaskDeletion} 
            />
            
          </>
        )}
      />
      <Route 
        path="/:taskTitle"
        exact
        component={TaskDetails}
      />
      </div>
    </Router>
  );
}

export default App;
