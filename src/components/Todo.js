import React from 'react';

const Item = (props) => {
  return (
    <div className='item'>
      <h3 className={props.item.task} onClick={props.onComplete}>
        {props.item.task}
      </h3>
    </div>
  );
};

export default Item;