import React, {useState} from "react";
import 'C:/Users/asdf/Front-project/toyproject_react/src/style/01. Color Flipper.css';


function ColorFlipper() {
    const changeColor =
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    const [Color, setColor] = useState();

    return (
        <div id="colorflipper" style={{backgroundColor: Color}}>
            <div id="header">
                <h1 id="left">Color Flipper</h1>
                <h1 id="right"> Simple Hex</h1>
            </div>
            <h1 id="colorName">Background Color: {Color}</h1>
            <button id="button" style={{backgroundColor: Color}} onClick={() => {
                setColor(changeColor)}}> CLICK ME </button>
        </div>
    )
}


export default ColorFlipper;