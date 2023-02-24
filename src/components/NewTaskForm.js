import React, { useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = () => {

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
  
  return (
    <form>
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

export default NewTaskForm;
