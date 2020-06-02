import React from 'react';

const Form = (props) => {
  return (
    <form>
      <input 
      id='newtask'
      onChange={props.onInputChange}
      name='task'
      type='text'
      paceholder='Add a task to do'
      />
      <button id='submit' onClick={props.onSubmit}>Add a Task</button>
      <button id='clear' onClick={props.onClear}>Clear Completed Tasks</button>
    </form>
  );
};

export default Form;