import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@material-ui/core/Tooltip';

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
          <div className="btn_div">
            <Tooltip title="Add" aria-label="add">
              <Button onClick={ incEvent } className="btn_green"><AddIcon /></Button>
            </Tooltip>

            <Tooltip title="Delete" aria-label="delete">
              <Button onClick={ decEvent } className="btn_red"><RemoveIcon /></Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
