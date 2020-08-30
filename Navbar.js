import React, { useState } from "react";
import {Link} from 'react-router-dom'
import ColorBox from "./ColorBox";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { render } from "react-dom";


function Navbar(props) {
  const [type, typeAfter] = useState("hex");
  const [open, afterOpen] = useState(false);

  const handleChange = (event) => {
    afterOpen(true);
    typeAfter(event.target.value);
  };
  function closeSnackBar() {
    afterOpen(false);
  };
render() 
const{level, changeLevel, showingAllColors}= this.props;
const {format} = this.state;
  return (
    <header className="Navbar">
      <div className="logo">
        <Link to='/'>COLORMASH</Link>
      </div>
      {showingAllColors && (
         <div className="slider-container">
        <span>Level:{props.level}</span>
        <div className="slider">
          <Slider
            defaultValue={props.level}
            min={100}
            max={900}
            onAfterChange={props.changeLevel}
            step={100}
          />
        </div>
      </div>
      )}
      <div className="select-container">
        <Select value={type} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(225,225,225)</MenuItem>
          <MenuItem value="rgba">RGBA - rbga(225,225,225, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        message={`Format Changed to ${type.toUpperCase()}`}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={closeSnackBar}
        action={[
          <IconButton color='inherit' key='close' aria-label='close'>
            <CloseIcon onClick={closeSnackBar} />
          </IconButton>,
        ]}
      />
    </header>
  );
}

export default Navbar;
