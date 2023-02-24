import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ onAddTask }) => {

  const [formFields, setFormFields] = useState({
    title: '',
    description: ''
  });

  const onTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value
    });
  };

  const onDescriptionChange = (event) => {
    setFormFields({
      ...formFields,
      description: event.target.value
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onAddTask({
      title: formFields.title,
      description: formFields.description
    });

    setFormFields({
      title: '',
      description: ''
    });
  };
  
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="title">Task Title:</label>
        <input name="title" value={formFields.title} onChange={onTitleChange} />
      </div>
      <div>
        <label htmlFor="description">Task Description:</label>
        <input name="description" value={formFields.description} onChange={onDescriptionChange} />
      </div>
      <input className="submit-button" type="submit" value="Add Task" />
    </form>
  );
};

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func.isRequired
};

export default NewTaskForm;
