// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Item from './Todo';

const List = (props) => {
  console.log(props);

  return(
    <div className='list'>
      {props.state.todolist.map(item => {
        return (
          <Item
          key={item.timestamp}
          item={item}
          onComplete={props.onComplete}
          />
        );
      })}
    </div>
  );
};

export default List;

