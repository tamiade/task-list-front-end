import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList.js';
import './App.css';


const App = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        for (let task of response.data) {
          task.isComplete = task.is_complete;
        }
        setTaskData(response.data);
      })
      .catch((error) => {
        console.log(
          "Anything that isn't status code 2XX is an error:",
          error.response.status
        );
        console.log(
          'The data from response with an error:',
          error.response.data
        );
      });
  }, []);

  const toggleCompleteTask = (taskId) => {
    const tasks = [];
    for (let task of taskData) {
      if (task.id === taskId) {
        task.isComplete = !task.isComplete;
      }
      tasks.push(task);
    }
    setTaskData(tasks);
  };

  const deleteTask = (taskId) => {
    const tasks = [];
    for (let task of taskData) {
      if (task.id !== taskId) {
        tasks.push(task);
      }
    }
    setTaskData(tasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={taskData} onUpdateTasks={toggleCompleteTask} onDeleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
