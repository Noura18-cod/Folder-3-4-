import React, { Component } from 'react';
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import {Link} from 'react-touter-dom';

class SingleColorPalette extends Component { 
  constructor(press){
    super(props);
  this._shades = gatherShades(this.props.palette, this.props.colorId);
this.state = {format:"hex"};
this.chanegFormat = this.chanegFormat.bind(this); 
}
  }
  gatherShade(palette, color);{
        let shades = [];
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat
      allColors[key].filter(color => color.id === colorToFilterBy)
    }
    //return all shades of given colors
    return shades.slice(1);
  }
  render() 
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette;
    const colorBoxes = this._shades.map(color => {
      < ColorBox 
      key={color.name} 
      name={color.name} 
      background={color[format]}
      showingFullPalette={false} />
    })
    return (
      <div className='Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
      <div className='Palette-colors'>
        {colorBoxes}
        <div className='go-back ColorBox'>
          <Link to={`/palette/${id}`} className='back-buttom'>
            GO BACK
            </Link>
           </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={wmoji} />
      </div>
    );
  }
}
export default SingleColorPalette;
