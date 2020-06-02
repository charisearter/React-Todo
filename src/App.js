import React from 'react';
import Form from './components/TodoForm';
import List from './components/TodoList';
import './components/Todo.css';

const todolist = [
  {
  task: 'Fold the blankets',
  id: 1234567890,
  completed: false,
},
];


class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todolist: todolist,
    };
    this.onComplete = this.onComplete.bind(this);
  }

  //newTask state
  newTask = {
    task: '', //task name
    id: Date.now(), //add the date and time
    completed: false, //not done yet
  };

  onComplete = e => {
  //  e.stopPropagation();
 
    this.setState({ todolist: this.state.todolist.map( item => {
      if(item.id === e){
        return {...item, completed:!item.completed
        };
      } 
      return item;
    }) 
  });
  };

  //handle Input Change

  onInputChange = e => this.newTask.task = e.target.value;

  //on Submit
  onSubmit = e =>{ 
    e.preventDefault(); 
    // e.stopPropagation();

    this.setState({ todolist: [...this.state.todolist, this.newTask] });
    this.newTask = {
      task:'',
      id: Date.now(),
      completed: false,
    };

    document.querySelector('#newtask').value = ''; //return input field to blank
};

  //handle Clear Complete

  onClear = (e) => {
     e.preventDefault(); //prevent default behavior
    // e.stopPropagation(); //prevents bubbling up to parent or capturing down to child
    // const stateCopy = [...this.state.todolist];
    // const newState = [];
    // stateCopy.map((item) => { 
    //   if (item.complete === false) { //clears all tasks but i want it to only clear finished tasks
    //     newState.push(item);
    //   }
      this.setState({ todolist: this.state.todolist.filter(item => {
        return !item.completed;
      })  
    }); //return uncompleted items

    };
  

  render() {
    return (  
      <div className='container'>
        <h2>ToDo List</h2>
        <List state={this.state.todolist} onComplete={this.onComplete} />
        <Form 
        onClear={this.onClear} 
        newTask={this.newTask} 
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
