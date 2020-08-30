import React, { useState } from "react";
import {Route, Switch} from 'react-router-dom';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
import { render } from "react-dom";
import PaletteFooter from "./PaletteFooter";

function Palette(props) {
  const [levels, leveling] = useState(500);
  function changeLevel(change) {
    return leveling(change);
  }
render() 
  const {colors, paletteName, emoji, id} = this.pros.palette;
  const{level, format}=this.state;
  const colorBoxes = props.palette.colors[levels].map((color) => {
    return <ColorBox 
    background={color.hex} 
    name={color.name}
    moreUrl={'/palette/${id}/${color.id}'}
    showFullPalette/>;
  });

  function changeFormat(e) {
    return e.target.value;
  }

  return (
    <div className="Palette">
      <Navbar
        handleChange={changeFormat}
        level={levels}
        changeLevel={changeLevel}
        showingAllColors
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={} emoji={} />
    </div>
  );
}

export default Palette;
