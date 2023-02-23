import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ task, onComplete, onDelete }) => {

  const onCompleteButtonClick = () => {
    onComplete(task.id);
  };

  const onDeleteButtonClick = () => {
    onDelete(task.id);
  };


  return (
    <li className="tasks__item">
      <button
        className={task.isComplete ? 'tasks__item__toggle--completed' : 'tasks__item__toggle'}
        onClick={onCompleteButtonClick}
      >
        {task.title}
      </button>
      <button className="tasks__item__remove button" onClick={onDeleteButtonClick}>x</button>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Task;
