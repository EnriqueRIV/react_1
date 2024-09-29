/* eslint-disable react/prop-types */
import './ShowCount.css';
import React from 'react';

const ShowCount = (props) => {
  const [count, setCount] = React.useState(props.Value);
  return (
    <div className='divCount'>
      <h1>You Clicked here {count} time</h1>
      <div className='divBtns'>
        <button
          className='minBtn'
          onClick={() => setCount((count) => count - 1)}
        >
          Restar
        </button>
        <button
          className='sumBtn'
          onClick={() => setCount((count) => count + 1)}
        >
          Sumar
        </button>
      </div>
    </div>
  );
};

export default ShowCount;
