import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onUpdateTasks, onDeleteTask }) => {
  
  const taskComponents = tasks.map(task => {
      return (
        <Task
          key={task.id}
          task={task}
          onComplete={onUpdateTasks}
          onDelete={onDeleteTask}
        />
      );
    });

  return <ul className="tasks__list no-bullet">{taskComponents}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onUpdateTasks: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default TaskList;
