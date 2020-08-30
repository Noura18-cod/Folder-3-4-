import React, { useState, Component } from "react";
import "./ColorBox.css";
import {Link} from "react-router-dom"
import { CopyToClipboard } from "react-copy-to-clipboard";
import { render } from "react-dom";
import chroma from "chroma-js";
import {withStyles } from "@material-ul/style";

const styles = {
  ColorBox: {
    width: "20%",
  height: props => props.showingFullPalette? "25%":"50%",
  margin: "0 auto",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  marginBottom: "-3.5px",
  "&:hover button": {
opacity: 1
  }
  },
copyText: {
  color: props =>chroma(background.luminance()) >=0.07?"black":"white"
},
colorName: {
  color: props => chroma(background.luminance()) <=0.08?"white":"black"
},
seeMore:{ 
  color: props=>
  chroma(props.background).luminance() <= 0.7?"rgba(0,0,0,0.6)":"white",
   background:"rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
    fontSize: "small",
    borderTopLeftRadius: "10px"
   },
   copyButtom:{
     color: props =>chroma(props.background).luminance() <= 0.7?"rgba(0,0,0,0.6)":"white",
    width: "80px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "63%",
    left: "83%",
    marginLeft: "-50%",
    marginTop: "-15%",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    color: "white",
    border: "none",
    borderRadius: "8px",
    textDecoration:"none",
    opacity:"0"
   },
   boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    bottom: "0px",
    left: "0px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
   },
   copyOverlay: {
    opacity: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
   },
   showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute"
   },
   copyMessage: {
    position: "fixed",
    height: "100%",
    width: "100%",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1":{
      fontWeight: "400",
      fontSize: "7rem",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
    },
    "& p":{
      fontSize: "2rem",
      fontWeight: "100"
    }
   },
   copyMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4 ease-in-out",
    transitionDelay: "0.3s"
   },
  
};

function ColorBox(props) {
  const [copied, copy] = useState(false);

  function copying() {
    return copy(
      true,
      setTimeout(() => {
        {
          copy(false);
        }
      }, 1500)
    );
  }
render() 
  const {name, background, paletteId, id, moreUrl, showingFullPalette, classes} =this.props;
  const {copied}=this.state;
  return (
    <CopyToClipboard text={props.background} onCopy={copying}>
      <div style={{ background: props.background }} className="classes.colorBox">
        <div
          style={{ background: props.background}}
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
          <h1>Copied! </h1>
          
          <p className={classes.coptText}>{props.background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className ={classes.colorName}>
            </span>
          </div>
          <button className={classes.copyButtom}>Copy</button>
        </div>
{showingFullPalette && ( 
        <Link 
        to={moreUrl}
         onClick={e => e.StopPropagation()}>
        <span className={classes.seeMore}>
        MORE
        </span>
        </Link>)}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
