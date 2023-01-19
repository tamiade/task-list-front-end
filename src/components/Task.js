import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, onComplete, onDelete }) => {

  const onCompleteButtonClick = () => {
    const updatedTask = {
      id: id,
      title: title,
      isComplete: !isComplete
    };

    onComplete(updatedTask);
  };

  const onDeleteButtonClick = () => {
    onDelete(id);
  };


  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : 'tasks__item__toggle';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onCompleteButtonClick}
      >
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={onDeleteButtonClick}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Task;
