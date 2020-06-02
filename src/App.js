import React from 'react';

class App extends React.Component {

  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state={
      item: '',
    };
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //handele add event
  handleAddEvent = () => alert('Add task to the todo list');

  //handle Clear Complete

  handleClearComplete = () => alert ('Clear all completed tasks from todo list!');

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input type='text' paceholder='...todo' />
        <button onClick={this.handleAddEvent} >Add Todo</button>
        <button onClick={this.handleClearComplete} >Clear Completed</button>
      </div>
    );
  }
}

export default App;
