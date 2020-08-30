import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette"

function App() {
  function findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }
  return (
    <Switch>
      <Route 
      exact
      path='/palette/:paletteId/:colorId' 
      render ={routeProps => (
        <SingleColorPalette 
        colorId={routeProps.match.params.colorId}
        palette={generatePalette(
          this.findPalerre (routeProps.match.params.paletteId)
      )}
 />
  )} 
  />
      <Route
        exact
        path='/'
        render= {routeProps => (
        <PaletteList palettes={seedColors} {...routeProps} /> 
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(props) => (
          <Palette
            palette={generatePalette(findPalette(props.match.params.id))}
          />
        )}
      />
    </Switch>
    // {/* <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div> */}
  );
}

export default App;
