import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from './store';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{
      textAlign: "center",
      marginTop: "100px",
    }}>
      <h2>{count}</h2>

      <button
        onClick={() => dispatch(increase())}

        style={{
          margin: "10px",
          padding: "10px 20px",
        }}
      >
        +
      </button>

      <button
        onClick={() => dispatch(decrease())}

        style={{
          margin: "10px",
          padding: "10px 20px",
        }}
      >
        −
      </button>
    </div>
  );

}

export default App