import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const App = () => {
  const [val, valChange] = useState(0);

  const incEvent = () => {
    valChange(val + 1);
  };

  const decEvent = () => {
    if (val == 0) {
      alert("Value is already 0!");
    } else {
      valChange(val - 1);
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>{ val }</h1>
          <br />
          <button onClick={ incEvent }><AddIcon /></button>
          <button onClick={ decEvent }><RemoveIcon /></button>
        </div>
      </div>
    </>
  );
};

export default App;
